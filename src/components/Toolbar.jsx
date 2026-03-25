export default function Toolbar({ isAdmin, progress, total }) {
  return (
    <div className="toolbar">
      <div className="tb-z s">
        <div>
          <div className="bk-title">Reading Interface</div>
        </div>
      </div>
      <div className="tb-z e">
        {!isAdmin && (
          <div className="prog-chip">
            <div className="prog-rail">
              <div className="prog-fill" style={{ width: `${Math.round((progress / total) * 100)}%` }} />
            </div>
            <span className="prog-lbl">{progress} / {total}</span>
          </div>
        )}
      </div>
    </div>
  );
}
