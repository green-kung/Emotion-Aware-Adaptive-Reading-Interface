import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { PASSAGES } from './data/passages';
import { SESSIONS, SHEET_WEBAPP_URL } from './data/sessions';
import { VariantContext } from './context/VariantContext';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import AdminPanel from './components/AdminPanel';
import ReadingView from './components/ReadingView';
import QuestionView from './components/QuestionView';
import SplitView from './components/SplitView';

const supabase = createClient(
  'https://feysaqreyldhstkontbf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZleXNhcXJleWxkaHN0a29udGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0Mjk5MDksImV4cCI6MjA5MDAwNTkwOX0.M9ZCMpttTQMMxvvUNtXmXA7jwGwi-8fcLOXpuJZSdQE'
);

const TOTAL_TRIALS = 6;

function nowTaipei() {
  const d = new Date();
  const offset = 8 * 60 * 60 * 1000;
  return new Date(d.getTime() + offset).toISOString().replace('Z', '+08:00');
}

const params = new URLSearchParams(window.location.search);
const variant = params.get('v')?.toUpperCase() || 'A';
const groupParam = params.get('g')?.toUpperCase() || null;
const isAdminMode = params.get('admin') === '1';
const isVariantB = variant === 'B';

function sendToSheetBatch(group, rows) {
  if (!SHEET_WEBAPP_URL || SHEET_WEBAPP_URL.startsWith('PASTE_')) return;
  const payload = JSON.stringify({ group, completedAt: new Date().toISOString(), rows });
  fetch(SHEET_WEBAPP_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams({ batch: payload }),
  }).catch(() => {});
}

export default function App() {
  const [curGroup, setCurGroup] = useState(groupParam);
  const [curTrial, setCurTrial] = useState(0);
  const [phase, setPhase] = useState(
    groupParam ? (isVariantB ? 'q' : 'read') : 'welcome'
  );
  const [responseLog, setResponseLog] = useState([]);

  const readingColRef = useRef(null);
  const questionStartsRef = useRef(
    groupParam && isVariantB && SESSIONS[groupParam]
      ? (() => {
          const seq = SESSIONS[groupParam];
          const p = PASSAGES[seq[0]];
          const now = Date.now();
          const starts = {};
          p.q.forEach(q => { starts[q.id] = now; });
          return starts;
        })()
      : {}
  );

  const passage = curGroup ? PASSAGES[SESSIONS[curGroup][curTrial]] : null;

  useEffect(() => {
    if (passage) document.body.classList.toggle('bold-mode', passage.bold);
  }, [passage]);

  function scrollTop() {
    if (readingColRef.current) readingColRef.current.scrollTop = 0;
  }

  function jumpTrial(idx) {
    setCurTrial(idx);
    setPhase(isVariantB ? 'q' : 'read');
    if (isVariantB) {
      const seq = SESSIONS[curGroup];
      const p = PASSAGES[seq[idx]];
      const now = Date.now();
      p.q.forEach(q => { questionStartsRef.current[q.id] = now; });
    }
    scrollTop();
  }

  function proceedToQ() {
    const seq = SESSIONS[curGroup];
    const p = PASSAGES[seq[curTrial]];
    const now = Date.now();
    p.q.forEach(q => { questionStartsRef.current[q.id] = now; });
    setPhase('q');
    scrollTop();
  }

  function handleAnswer(qid, letter, correct) {
    const start = questionStartsRef.current[qid];
    const elapsedSec = start ? Number(((Date.now() - start) / 1000).toFixed(1)) : null;
    const correctAnswer = passage.q.find(q => q.id === qid)?.ans ?? null;
    const row = {
      group: curGroup,
      question: qid,
      response: letter,
      correct_answer: correctAnswer,
      correct,
      elapsed: elapsedSec,
      time: nowTaipei(),
    };
    setResponseLog(prev => {
      if (prev.some(r => r.question === qid)) return prev;
      return [...prev, row];
    });
    supabase.from('responses').insert({
      group_id: curGroup,
      question: qid,
      response: letter,
      correct_answer: correctAnswer,
      correct,
      elapsed_sec: elapsedSec,
      responded_at: nowTaipei(),
    }).then(({ error }) => {
      if (error) console.error('Supabase insert error:', error.message);
    });
  }

  function nextTrial() {
    setPhase('between');
    scrollTop();
  }

  function confirmNext() {
    const next = curTrial + 1;
    setCurTrial(next);
    setPhase(isVariantB ? 'q' : 'read');
    if (isVariantB) {
      const seq = SESSIONS[curGroup];
      const p = PASSAGES[seq[next]];
      const now = Date.now();
      p.q.forEach(q => { questionStartsRef.current[q.id] = now; });
    }
    scrollTop();
  }

  function finishSession() {
    setPhase('done');
    scrollTop();
    const rows = responseLog.filter(r => r.group === curGroup);
    if (rows.length) sendToSheetBatch(curGroup, rows);
  }

  const seq = curGroup ? SESSIONS[curGroup] : [];
  const progress = phase === 'done' ? TOTAL_TRIALS : curTrial;

  return (
    <VariantContext.Provider value={variant}>
      <div className="app">
        <Toolbar
          isAdmin={isAdminMode}
          progress={progress}
          total={TOTAL_TRIALS}
        />

        {isAdminMode ? (
          <AdminPanel />
        ) : (
          <div className="body-layout">

            {isVariantB && phase === 'q' && passage ? (
              <SplitView
                key={`${curGroup}-${curTrial}`}
                passage={passage}
                trialIdx={curTrial}
                totalTrials={seq.length}
                onAnswer={handleAnswer}
                onNext={nextTrial}
                onFinish={finishSession}
              />
            ) : (
              <div className="reading-col" ref={readingColRef}>
                <div className="page">
                  {phase === 'welcome' && (
                    <div className="complete-screen">
                      <div className="complete-icon">📖</div>
                      <div className="complete-title">Reading Interface</div>
                    </div>
                  )}

                  {(phase === 'read' || phase === 'q') && passage && (
                    phase === 'read' ? (
                      <ReadingView passage={passage} onProceed={proceedToQ} />
                    ) : (
                      <QuestionView
                        key={`${curGroup}-${curTrial}`}
                        passage={passage}
                        trialIdx={curTrial}
                        totalTrials={seq.length}
                        onAnswer={handleAnswer}
                        onNext={nextTrial}
                        onFinish={finishSession}
                      />
                    )
                  )}

                  {phase === 'between' && (
                    <div className="complete-screen">
                      <button className="trial-next-btn" onClick={confirmNext}>
                        Next
                        <svg viewBox="0 0 14 14"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
                      </button>
                    </div>
                  )}

                  {phase === 'done' && (
                    <div className="complete-screen">
                      <div className="complete-icon">✓</div>
                      <div className="complete-title">Submission successful.</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </VariantContext.Provider>
  );
}
