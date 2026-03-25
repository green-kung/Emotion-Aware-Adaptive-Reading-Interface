import { useState, useEffect, useRef } from 'react';
import { PASSAGES } from './data/passages';
import { SESSIONS, SHEET_WEBAPP_URL } from './data/sessions';
import { VariantContext } from './context/VariantContext';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import AdminPanel from './components/AdminPanel';
import ReadingView from './components/ReadingView';
import QuestionView from './components/QuestionView';
import SplitView from './components/SplitView';

const TOTAL_TRIALS = 6;
const variant = new URLSearchParams(window.location.search).get('v')?.toUpperCase() || 'A';

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
  const [isAdmin, setIsAdmin]         = useState(false);
  const [curGroup, setCurGroup]       = useState('G1');
  const [curTrial, setCurTrial]       = useState(0);
  const [phase, setPhase]             = useState('welcome'); // 'welcome'|'read'|'q'|'done'
  const [responseLog, setResponseLog] = useState([]);

  const readingColRef = useRef(null);
  const questionStartsRef = useRef({});

  const isVariantB = variant === 'B';
  const passage = curGroup ? PASSAGES[SESSIONS[curGroup][curTrial]] : null;

  useEffect(() => {
    if (passage) document.body.classList.toggle('bold-mode', passage.bold);
  }, [passage]);

  useEffect(() => {
    document.body.classList.toggle('admin-mode', isAdmin);
    document.body.classList.toggle('participant-mode', !isAdmin);
  }, [isAdmin]);

  function scrollTop() {
    if (readingColRef.current) readingColRef.current.scrollTop = 0;
  }

  function selectGroup(g) {
    setCurGroup(g);
    setCurTrial(0);
    setPhase(isVariantB ? 'q' : 'read');
    if (isVariantB) {
      const seq = SESSIONS[g];
      const p = PASSAGES[seq[0]];
      const now = Date.now();
      p.q.forEach(q => { questionStartsRef.current[q.id] = now; });
    }
    scrollTop();
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
    const seq = SESSIONS[curGroup];
    const passageId = seq[curTrial];
    const row = {
      group: curGroup,
      variant,
      trial: curTrial + 1,
      passage: passageId,
      question: qid,
      response: letter,
      correct,
      elapsed: elapsedSec,
      time: new Date().toISOString(),
    };
    setResponseLog(prev => {
      if (prev.some(r => r.question === qid)) return prev;
      return [...prev, row];
    });
  }

  function nextTrial() {
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

  function exportLog() {
    const rows = ['Time,Subject,Variant,Passage,Question,Response,Correct,ElapsedSeconds'];
    responseLog.forEach(r => {
      rows.push([r.time, r.group, r.variant, r.passage, r.question, r.response, r.correct, r.elapsed].join(','));
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EAR_responses_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const seq = curGroup ? SESSIONS[curGroup] : [];
  const progress = phase === 'done' ? TOTAL_TRIALS : curTrial;


  return (
    <VariantContext.Provider value={variant}>
      <div className="app">
        <Toolbar
          isAdmin={isAdmin}
          onToggleAdmin={() => setIsAdmin(v => !v)}
          progress={progress}
          total={TOTAL_TRIALS}
          variant={variant}
        />

        {isAdmin ? (
          <AdminPanel
            curGroup={curGroup}
            onSelectGroup={selectGroup}
            responseLog={responseLog}
            onExport={exportLog}
          />
        ) : (
          <div className="body-layout">
            <Sidebar
              curGroup={curGroup}
              curTrial={curTrial}
              onSelectGroup={selectGroup}
              onJumpTrial={jumpTrial}
            />

            {/* Variant B: split layout takes over the reading col entirely */}
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
                      <ReadingView
                        passage={passage}
                        onProceed={proceedToQ}
                      />
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
