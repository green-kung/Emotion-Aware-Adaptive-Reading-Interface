export default function ReadingView({ passage, onProceed }) {
  const { label, title, sub, source, scaffold, body, intro, causal, tension, posA, posB, myth, fact, evidence, closing } = passage;

  return (
    <div>
      <div className="eyebrow">
        <div className="eyebrow-rule" />
        Passage {label}
        <div className="eyebrow-rule" />
      </div>
      <h1 className="art-title">{title}</h1>
      {sub && <p className="art-sub">{sub}</p>}
      {source && (
        <div className="art-meta">
          <span className="meta-author" dangerouslySetInnerHTML={{ __html: source }} />
        </div>
      )}

      {intro && <div className="body" dangerouslySetInnerHTML={{ __html: intro }} />}
      {body && <div className="body" dangerouslySetInnerHTML={{ __html: body }} />}

      {scaffold === 'causal' && causal && (
        <div className="causal-box">
          <div className="causal-header">
            <span className="causal-kicker">Inferential Chain — What the text implies but does not state</span>
            <div className="causal-rule" />
          </div>
          {causal.map(s => (
            <div key={s.n} className="causal-step">
              <span className="causal-n">{s.n}</span>
              <span className="causal-txt">{s.t}</span>
            </div>
          ))}
        </div>
      )}

      {scaffold === 'conflict' && posA && posB && (
        <>
          <div className="tension-bar">
            <span className="tension-icon">⇔</span>
            <span className="tension-txt">{tension}</span>
          </div>
          <div className="conflict-grid">
            <div className="persp-col pa">
              <div className="persp-hd">
                <div className="persp-lbl">{posA.label}</div>
                <div className="persp-sub">{posA.sub}</div>
              </div>
              <div className="persp-body" dangerouslySetInnerHTML={{ __html: posA.text }} />
            </div>
            <div className="persp-col pb">
              <div className="persp-hd">
                <div className="persp-lbl">{posB.label}</div>
                <div className="persp-sub">{posB.sub}</div>
              </div>
              <div className="persp-body" dangerouslySetInnerHTML={{ __html: posB.text }} />
            </div>
          </div>
        </>
      )}

      {scaffold === 'refutation' && myth && fact && (
        <>
          <div className="ref-block">
            <div className="ref-row myth">
              <div className="ref-tag">
                <span className="ref-badge">{myth.label}</span>
                <span className="ref-badge-sub">{myth.sub}</span>
                <span className="ref-glyph">∅</span>
              </div>
              <div className="ref-content">{myth.text}</div>
            </div>
            <div className="ref-row fact">
              <div className="ref-tag">
                <span className="ref-badge">{fact.label}</span>
                <span className="ref-badge-sub">{fact.sub}</span>
                <span className="ref-glyph">✓</span>
              </div>
              <div className="ref-content" dangerouslySetInnerHTML={{ __html: fact.text }} />
            </div>
            <div className="ref-evidence" dangerouslySetInnerHTML={{ __html: evidence }} />
          </div>
          {closing && <div className="body" dangerouslySetInnerHTML={{ __html: closing }} />}
        </>
      )}

      {onProceed && (
        <button className="next-btn" onClick={onProceed}>
          Proceed to Questions
          <svg viewBox="0 0 14 14"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
        </button>
      )}
    </div>
  );
}
