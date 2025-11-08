import { useState, useEffect } from "react";

function Calculator({ onGuessSubmit }) {
  const [screen, setScreen] = useState("");
  const [guess, setGuess] = useState();

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

  const handValid = () => {
    if (screen === "") {
      console.log("Impossible de valider, aucune entrée n'a été effectuée.")
      return;
    }

    const newGuess = parseFloat(screen);

    if (isNaN(newGuess)){
      console.log("Guess n'est pas une entrée conforme.");
      return;
    }

    setGuess(newGuess);
    console.log("New Guess :", newGuess);

    if (onGuessSubmit) {
      onGuessSubmit(newGuess);
      setScreen("");
    }
  };

  return (
    <div>
      <div className="calculator-container">
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
        </div>
        <div className="calculator-actions-key-container">
          <div className="calculator-screen">{screen}</div>
          <div className="calculator-actions-key">
            <div className="calculator-action-key" onClick={handValid}>
              Valider
            </div>
            <div className="calculator-action-key" onClick={handleSuppr}>
              Suppr
            </div>
            <div className="calculator-action-key" onClick={handleClear}>
              Clear
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
