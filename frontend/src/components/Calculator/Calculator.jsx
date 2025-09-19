import { useState, useEffect } from "react";

function Calculator() {
  const [screen, setScreen] = useState("");

  const handleKey = (e) => {
    const target = e.target.textContent;
    console.log(target);
    setScreen((prev) => prev + target);
  };

  const handleSuppr = () => {
    setScreen((prev) => prev.slice(0, -1));
  };

   const handleClear = () => {
    setScreen("");
  };

  return (
    <div>
      <div className="calculator-screen">{screen}</div>
      <div className="calculator-key-container">
        <div className="calculator-key" onClick={handleKey}>
          1
        </div>
        <div className="calculator-key" onClick={handleKey}>
          2
        </div>
        <div className="calculator-key" onClick={handleKey}>
          3
        </div>
        <div className="calculator-key" onClick={handleKey}>
          4
        </div>
        <div className="calculator-key" onClick={handleKey}>
          5
        </div>
        <div className="calculator-key" onClick={handleKey}>
          6
        </div>
        <div className="calculator-key" onClick={handleKey}>
          7
        </div>
        <div className="calculator-key" onClick={handleKey}>
          8
        </div>
        <div className="calculator-key" onClick={handleKey}>
          9
        </div>
        <div className="calculator-key" onClick={handleKey}>
          0
        </div>
        <div className="calculator-key" onClick={handleKey}>
          00
        </div>
        <div className="calculator-key" onClick={handleKey}>
          .
        </div>
        <div className="calculator-key">Valider</div>
        <div className="calculator-key" onClick={handleSuppr}>Suppr</div>
        <div className="calculator-key" onClick={handleClear}>Clear</div>
      </div>
    </div>
  );
}

export default Calculator;
