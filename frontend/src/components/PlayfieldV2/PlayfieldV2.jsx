import { useState, useEffect } from "react";
import { shuffle } from "../../logic/shuffle";
import CardDisplay from "../../pages/CardDisplay/CardDisplay";
import Card from "../Card/Card";
import Calculator from "../Calculator/Calculator";
import Effet from "../Effet/Effet";

function Playfield() {
  const [dataCards, setDataCards] = useState([]);
  const [newDataCards, setNewDataCards] = useState([]);
  const [newDataItem, setNewDataItem] = useState([]);
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [wastepile, setWastepile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [startGame, setStartGame] = useState(true);

  const [playerGuess, setPlayerGuess] = useState(null);
  const [lifePlayer, setLifePlayer] = useState(100);
  const [lifeBoss, setLifeBoss] = useState(100);

  const [rightNb, setRightNb] = useState(0);
  const [leftNb, setLeftNb] = useState(0);
  const [symbol, setSymbol] = useState("");
  // const [mathSymbol, setMathSymbol] = useState("");
  const [isAttributeDropped, setIsAttributeDropped] = useState(false);
  const symbolArr = ["+", "-", "x", "÷"];
  const [newRound, setNewRound] = useState(true);

  // PLAYER STATS
  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerCrystals, setPlayerCrystals] = useState(0);

  // États pour les cartes jouées
  const [playedCards, setPlayedCards] = useState({
    1: null, // case 1
  });

  useEffect(() => {
    if (newRound) {
      const rand = Math.floor(Math.random() * 3);
      setSymbol(symbolArr[rand]);
      console.log(`Symbol is: ${symbol}`);
      console.log(symbolArr[rand]);
      if (symbol != "") {
        setIsAttributeDropped(true);
      }
    }
  }, [symbol, newRound]);

  useEffect(() => {
    if (isAttributeDropped) {
      console.log("TESSSSSSST");
      if (symbol === "-") {
        const randomNbLeft = Math.floor(Math.random() * 50);
        const randomNbRight = Math.floor(Math.random() * 50);
        setRightNb(randomNbRight);
        setLeftNb(randomNbLeft);
      } else if (symbol === "÷") {
        const randomNbLeft = Math.floor(Math.random() * 50);
        const randomNbRight = Math.floor(Math.random() * 50);
        setRightNb(randomNbRight);
        setLeftNb(randomNbLeft);
      } else {
        const randomNbLeft = Math.floor(Math.random() * 50);
        const randomNbRight = Math.floor(Math.random() * 50);
        setRightNb(randomNbRight);
        setLeftNb(randomNbLeft);
      }
      setNewRound(false);
    }
  }, [isAttributeDropped, newRound]);

  useEffect(() => {
    fetch("/api/cards/deckready")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDataCards(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setNewDataItem(dataCards.filter((item) => item.attribute === "n"));
    console.log(newDataItem);
  }, [dataCards]);

  useEffect(() => {
    if (dataCards.length > 0) {
      const newDeck = dataCards
        .slice(0, 15)
        .filter((card) => card.attribute !== "n");
      const finalDeck = [...newDeck];
      const shuffledDeck = shuffle(finalDeck);
      console.log("Final shuffled deck:", shuffledDeck);
      const newHand = shuffledDeck.slice(0, 5);
      setDeck(shuffledDeck.slice(5, 35));
      setHand(newHand);
      setStartGame(false); // Éviter que ça se répète
    }
  }, [dataCards, startGame]);

  useEffect(() => {
    if (isDeckEmpty && deck.length > 0 && hand.length < 8) {
      setHand(...[hand], hand.push(deck[0]));
      console.log(hand);
      console.log(deck);
      setDeck(...[deck], deck.shift(deck));
      setIsDeckEmpty(false);
    }
  });

  const addCardDeck = () => {
    setIsDeckEmpty(true);
  };

  const handlePlayerGuess = (guess) => {
    setPlayerGuess(guess);
    console.log("Player guess:", guess);

    if (calculateResult() === guess) {
      console.log("Correct answer !");
      setLifeBoss((prev) => prev - 10);
    } else {
      console.log("Wrong answer !");
      setLifePlayer((prev) => prev - 10);
    }
    setNewRound(true);
  };

  const calculateResult = () => {
    switch (symbol) {
      case "+":
        return leftNb + rightNb;
      case "-":
        return leftNb - rightNb;
      case "x":
        return leftNb * rightNb;
      case "÷":
        return leftNb / rightNb;
      default:
        return "?";
    }
  };

  useEffect(() => {
    console.log("isAttributeDropped changed to:", isAttributeDropped);
  }, [isAttributeDropped]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="playfield-container">
      <div className="playfield-central-container">
        {/* Player 1 */}
        <div className="playfield-character-container">
          <div className="playfield-character-life-container">
            <div
              className="playfield-character-life playfield-player-life"
              style={{ width: `${lifePlayer}%` }}
            ></div>
          </div>
          <div className="playfield-character-portrait"></div>
        </div>
        {isAttributeDropped ? (
          <div className="playfield-central-area pca-number">{leftNb}</div>
        ) : (
          <div className="playfield-central-area pca-number"></div>
        )}
        <div className="playfield-central-area pca-actionV2">{symbol}</div>
        {isAttributeDropped ? (
          <div className="playfield-central-area pca-number">{rightNb}</div>
        ) : (
          <div className="playfield-central-area pca-number"></div>
        )}
        <div className="playfield-character-container">
          <div className="playfield-character-life-container">
            <div
              className="playfield-character-life playfield-foe-life"
              style={{ width: `${lifeBoss}%` }}
            ></div>
          </div>
          <div className="playfield-character-portrait"></div>
        </div>
      </div>
      <div>
        {leftNb} {symbol} {rightNb} = {calculateResult()}
      </div>

      <div className="playfield-player-container">
        <div className="playfield-central-container">
          <div className="playfield-central-items-container">
            <Effet effectName="Dgt +10" effectState="Prêt" />
            <Effet effectName="Dgt +20" effectState="Prêt" />
            <Effet effectName="Dgt +30" effectState="Prêt" />
            <div className="playfield-central-item"></div>
            <div className="playfield-central-item"></div>
            <div className="playfield-central-item"></div>
          </div>
        </div>
      </div>
      <section className="playfield-bottom">
        <div className="shop-container">SHOP</div>
        <Calculator onGuessSubmit={handlePlayerGuess} />
        <div className="deck-container">DECK</div>
      </section>
    </div>
  );
}

export default Playfield;
