export default function Toolbar({ isAdmin, onToggleAdmin, progress, total, variant }) {
  return (
    <div className="toolbar">
      <div className="tb-z s">
        <button
          className="mode-toggle"
          type="button"
          aria-pressed={isAdmin}
          title="Toggle admin mode"
          onClick={onToggleAdmin}
        >
          <span className="mode-track"><span className="mode-thumb" /></span>
        </button>
        <div>
          <div className="bk-title">Reading Interface</div>
        </div>
      </div>
      <div className="tb-z e">
        {isAdmin && variant && (
        <span style={{ fontSize: 10, color: 'var(--c-ui3)', fontFamily: 'var(--font-mono)', marginRight: 8 }}>
          Variant {variant}
        </span>
      )}
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
