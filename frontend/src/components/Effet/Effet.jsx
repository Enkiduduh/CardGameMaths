import { useState, useEffect } from "react";

function Effet({ effectName, effectState, isDisabled, onClick }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
    setSelected((prev) => !prev);
  };

  return (
    <div
      className={`effet-item ${selected ? "selected" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={handleClick}
      style={{
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
    >
      <div className="effet-item-name">{effectName}</div>
      <div className="effet-item-effect">{effectState}</div>
    </div>
  );
}

export default Effet;
