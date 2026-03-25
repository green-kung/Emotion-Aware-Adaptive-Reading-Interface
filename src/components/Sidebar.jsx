import { SESSIONS } from '../data/sessions';
import { PASSAGES } from '../data/passages';

export default function Sidebar({ curGroup, curTrial, onJumpTrial }) {
  const seq = curGroup ? SESSIONS[curGroup] : [];

  return (
    <div className="sidebar">
      <div className="sb-scroll">
        {curGroup && (
          <div className="sec">
            <div className="sec-lbl">Sequence</div>
            <div className="trial-list">
              {seq.map((tid, i) => {
                const p = PASSAGES[tid];
                const title = p.title.length > 38 ? p.title.slice(0, 38) + '…' : p.title;
                return (
                  <div
                    key={i}
                    className={`trial-chip${i === curTrial ? ' active' : ''}${i < curTrial ? ' done' : ''}`}
                    onClick={() => onJumpTrial(i)}
                  >
                    <span className={`trial-badge${p.bold ? ' bold-badge' : ''}`}>{tid}</span>
                    <span>{title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
