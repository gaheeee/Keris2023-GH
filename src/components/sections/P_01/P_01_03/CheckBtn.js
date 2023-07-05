export default function CheckBtn({ isActive, onClick, children }) {
    const handleClick = () => {
      if (!isActive) {
        onClick();
      }
    };
  
    return (
      <div className="check-btn">
        {children}
        <input
          type="checkbox"
          checked={isActive}
          onChange={handleClick}
        />
      </div>
    );
  }
