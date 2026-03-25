import { useState } from 'react';
import { SESSIONS } from '../data/sessions';

export default function AdminPanel() {
  const [v, setV] = useState('A');
  const [g, setG] = useState('G1');
  const [copied, setCopied] = useState(false);

  const url = `${window.location.origin}/?v=${v.toLowerCase()}&g=${g}`;

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="admin-panel">
      <div className="admin-head">
        <div className="admin-title">Session Link Generator</div>
      </div>

      <div className="admin-preview" style={{ marginTop: 16 }}>
        <h4 style={{ margin: '0 0 12px' }}>Variant</h4>
        <div className="admin-groups">
          {['A', 'B'].map(opt => (
            <button
              key={opt}
              type="button"
              className={v === opt ? 'active' : ''}
              onClick={() => setV(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <h4 style={{ margin: '20px 0 12px' }}>Group</h4>
        <div className="admin-groups">
          {Object.keys(SESSIONS).map(grp => (
            <button
              key={grp}
              type="button"
              className={g === grp ? 'active' : ''}
              onClick={() => setG(grp)}
            >
              {grp}
            </button>
          ))}
        </div>

        <h4 style={{ margin: '20px 0 8px' }}>Participant Link</h4>
        <div className="admin-head" style={{ gap: 8 }}>
          <code style={{
            flex: 1,
            background: 'var(--c-bg)',
            border: 'var(--bw) solid var(--c-border)',
            borderRadius: 4,
            padding: '6px 10px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            wordBreak: 'break-all',
          }}>
            {url}
          </code>
          <button className="tb-btn" onClick={handleCopy} title="Copy link" style={{ flexShrink: 0 }}>
            {copied ? (
              <svg viewBox="0 0 16 16"><path d="M2 8l4 4 8-8" /></svg>
            ) : (
              <svg viewBox="0 0 16 16"><rect x="4" y="4" width="9" height="9" rx="1" /><path d="M3 3h7v1H3zM3 3v7h1V3z" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
