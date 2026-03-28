import { useState } from 'react';
import ReadingView from './ReadingView';

export default function SplitView({ passage, trialIdx, totalTrials, onNext, onFinish, onAnswer }) {
  const [selected, setSelected] = useState({});

  function handleSelect(qid, letter) {
    setSelected(prev => ({ ...prev, [qid]: letter }));
  }

  function submitAndProceed(proceedFn) {
    passage.q.forEach(q => {
      const letter = selected[q.id];
      if (letter) {
        const correct = q.ans === letter;
        onAnswer(q.id, letter, correct);
      }
    });
    proceedFn();
  }

  const isLast = trialIdx === totalTrials - 1;
  const allSelected = passage.q.every(q => selected[q.id]);

  return (
    <div className="split-layout">
      {/* Left: article */}
      <div className="split-article">
        <div className="page">
          <ReadingView passage={passage} onProceed={null} />
        </div>
      </div>

      {/* Right: questions */}
      <div className="split-questions">
        <div className="page">
          <div className="q-page-header">
            <div className="q-page-rule" />
            <span className="q-page-eyebrow">
              Passage {passage.label}
            </span>
            <div className="q-page-rule" />
          </div>

          <div className="q-block">
            {passage.q.map(q => {
              const choice = selected[q.id];
              return (
                <div key={q.id} className="q-item">
                  <div className="q-stem" dangerouslySetInnerHTML={{ __html: q.stem }} />
                  <div className="q-options">
                    {q.opts.map(o => {
                      const [letter, ...rest] = o.split('|');
                      return (
                        <div
                          key={letter}
                          className={`q-opt${choice === letter ? ' selected' : ''}`}
                          onClick={() => handleSelect(q.id, letter)}
                        >
                          <span className="q-letter">{letter}</span>
                          <span className="q-text" dangerouslySetInnerHTML={{ __html: rest.join('|') }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {allSelected && (
            isLast ? (
              <button className="trial-next-btn" onClick={() => submitAndProceed(onFinish)}>
                Finish Session
                <svg viewBox="0 0 14 14"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </button>
            ) : (
              <button className="trial-next-btn" onClick={() => submitAndProceed(onNext)}>
                Next Passage
                <svg viewBox="0 0 14 14"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </button>
            )
          )}

          <div className="foot">
            <sup>*</sup>&ensp;Passage {passage.label}. IRB Protocol #2024-CR-0417.
          </div>
        </div>
      </div>
    </div>
  );
}
