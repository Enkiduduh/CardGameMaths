import { useState, useEffect } from "react";
import img_suppr from "../../../public/assets/supprimer.png";
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
      console.log("Impossible de valider, aucune entrée n'a été effectuée.");
      return;
    }

    const newGuess = parseFloat(screen);

    if (isNaN(newGuess)) {
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
    <>
      <div className="calculator-container-ext">
        <div className="calculator-backscreen"></div>
        <div className="calculator-backscreen2"></div>
        <div className="calculator-screen-container">
          <div className="calculator-screen">{screen}</div>
        </div>
        <div className="calculator-container">
          <div className="calculator-key-container">
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">1</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">2</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">3</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">4</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">5</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">6</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">7</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">8</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">9</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">0</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">00</div>
            </div>
            <div className="calculator-key" onClick={handleKey}>
              <div className="calculator-key-box">.</div>
            </div>
          </div>
          <div className="calculator-actions-key-container">
            <div className="calculator-actions-key">
              <div
                className="calculator-action-key cak-valider"
                onClick={handValid}
              >
                <div className="calculator-action-key-box">Valider</div>
              </div>
              <div
                className="calculator-action-key cak-corriger"
                onClick={handleClear}
              >
                <div className="calculator-action-key-box">Corriger</div>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator-exterior-bottom"></div>
      </div>
    </>
  );
}

export default Calculator;
