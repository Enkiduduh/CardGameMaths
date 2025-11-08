import React from "react";

function Effet({ effectName, effectState }) {
  return (
    <div className="effet-item">
      <div className="effet-item-name">{effectName}</div>
      <div className="effet-item-effect">{effectState}</div>
    </div>
  );
}

export default Effet;
