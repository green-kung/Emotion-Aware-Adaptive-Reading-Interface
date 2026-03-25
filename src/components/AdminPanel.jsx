import { SESSIONS } from '../data/sessions';
import { PASSAGES } from '../data/passages';


export default function AdminPanel({ curGroup, onSelectGroup, responseLog, onExport }) {
  const seq = curGroup ? SESSIONS[curGroup] : [];

  return (
    <div className="admin-panel">
      <div className="admin-head">
        <div className="admin-title">Admin Controls</div>
      </div>

      <div className="admin-groups">
        {Object.keys(SESSIONS).map(g => (
          <button
            key={g}
            type="button"
            className={curGroup === g ? 'active' : ''}
            onClick={() => onSelectGroup(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {curGroup && (
        <div className="admin-preview" style={{ visibility: 'hidden' }}>
          <h4>Selected Group: {curGroup}</h4>
          <div className="admin-seq">
            {seq.map(tid => {
              const p = PASSAGES[tid];
              return (
                <div key={tid} className="admin-seq-row">
                  <span>{tid}</span> — {p.title}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="admin-preview" style={{ marginTop: 16 }}>
        <div className="admin-head">
          <h4 style={{ margin: 0 }}>Response Log</h4>
          <button className="tb-btn" title="Export responses" onClick={onExport}>
            <svg viewBox="0 0 16 16">
              <path d="M8 2v8M4 7l4 4 4-4M2 13h12" />
            </svg>
          </button>
        </div>
        <ul className="log-list">
          {responseLog.length === 0 ? (
            <li style={{ color: 'var(--c-ui3)', fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-xs)' }}>
              No responses yet.
            </li>
          ) : (
            responseLog.map((r, i) => (
              <li key={i} className="log-row">
                {r.group}&nbsp;&nbsp;{r.passage}&nbsp;&nbsp;{r.question}&nbsp;&nbsp;→ {r.response}&nbsp;&nbsp;
                {r.correct ? '✓' : '✗'}
                {r.elapsed != null ? `  ${r.elapsed}s` : ''}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
