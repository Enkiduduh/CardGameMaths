import { useState, useEffect } from "react";

function Effet({ effectName, effectState, effectImg, isDisabled, onClick, isShopOpened }) {
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
        transform: isShopOpened ? "scale(1.5)" : "scale(1)",
        margin: isShopOpened ? "10px" : "5px"
      }}
    >
      <div className="effet-item-name">{effectName}</div>
      <div className="effet-item-effect">{effectState}</div>
      <img className="effet-item-img" src={effectImg} alt="" />
    </div>
  );
}

export default Effet;
