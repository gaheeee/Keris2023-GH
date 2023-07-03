
export default function TabBtn({ isActive, onClick, children }) {
    return (
      <button
        className={`tab-button ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }