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
  const [playerCanBuy, setPlayerCanBuy] = useState(false);
  const [playerTurns, setPlayerTurns] = useState(0);
  // États pour les cartes jouées
  const [playedCards, setPlayedCards] = useState({
    1: null, // case 1
  });
  const [newRoundEffect, setNewRoundEffect] = useState(true);
  const [playerEffects, setPlayerEffects] = useState([
    { id: 1, name: "Dégat +10", state: "Prêt", damage: 10, used: false },
    { id: 2, name: "Dégat +20", state: "Prêt", damage: 20, used: false },
    { id: 3, name: "Dégat +30", state: "Prêt", damage: 30, used: false },
  ]);

  const [shopEffects, setShopEffects] = useState([
    { id: 4, name: "Dégat +40", state: "Prêt", damage: 40, used: false },
    { id: 5, name: "Soin +15", state: "Prêt", heal: 15, used: false },
    { id: 6, name: "Bouclier", state: "Prêt", protection: true, used: false },
  ]);

  //Fonction pour transférer un effet du shop au joueur
  const buyEffect = (effectId) => {
    if (playerTurns === 3 || playerTurns === 6 || playerTurns === 9) {
      const effect = shopEffects.find((e) => e.id === effectId);
      playerEffects.push(effect);
      setShopEffects(shopEffects.filter((e) => e.id != effectId));
      console.log("Achat");
      setPlayerCanBuy(false);
    }
  };

  // Fonction pour activer un effet
  const activateEffect = (effectId) => {
    const effect = playerEffects.find((e) => e.id === effectId);
    if (newRoundEffect) {
      if (!effect || effect.used) {
        console.log("Effet déjà utilisé ou inexistant");
        return;
      }
      // Appliquer l'effet
      if (effect.damage) {
        setLifeBoss((prev) => Math.max(0, prev - effect.damage));
        console.log(`Dégâts infligés: ${effect.damage}`);
        setNewRoundEffect(false);
      }

      if (effect.heal) {
        setLifePlayer((prev) => Math.min(100, prev + effect.heal));
        console.log(`Soins reçus: ${effect.heal}`);
        setNewRoundEffect(false);
      }

      // Marquer l'effet comme utilisé
      setPlayerEffects((prev) =>
        prev.map((e) =>
          e.id === effectId ? { ...e, used: true, state: "Utilisé" } : e
        )
      );
    }
  };

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
    console.log("Player turn:", playerTurns);
    setNewRound(true);
    setNewRoundEffect(true);
    setPlayerTurns((prev) => prev + 1);
    if (playerTurns === 2 || playerTurns === 5 || playerTurns === 8) {
      setPlayerCanBuy(true);
    } else {
      setPlayerCanBuy(false);
    }
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
            >
              {lifeBoss}
            </div>
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
            {playerEffects.map((effect) => (
              <Effet
                key={effect.id}
                effectName={effect.name}
                effectState={effect.used ? "Utilisé" : effect.state}
                isDisabled={effect.used}
                onClick={() => activateEffect(effect.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <section className="playfield-bottom">
        <div className="shop-container">
          <div>
            {playerCanBuy ? (
              <>
                <div>Boutique ouverte</div>
                <div className="shop-container-effects">
                  {shopEffects.map((effect) => (
                    <Effet
                      key={effect.id}
                      effectName={effect.name}
                      onClick={() => buyEffect(effect.id)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div>Boutique fermée</div>
            )}
          </div>
        </div>
        <Calculator onGuessSubmit={handlePlayerGuess} />
        <div className="deck-container">Tour du joueur : {playerTurns}</div>
      </section>
    </div>
  );
}

export default Playfield;
