import { useState, useEffect } from "react";
import { shuffle } from "../../logic/shuffle";
import CardDisplay from "../../pages/CardDisplay/CardDisplay";
import Card from "../Card/Card";
import Calculator from "../Calculator/Calculator";
import Effet from "../Effet/Effet";
import Portrait_player from "../../../public/assets/PORTRAIT-OSCAR.png";
import Portrait_boss from "../../../public/assets/PORTRAIT-MULTIPLIGATOR.png";
import PlaqueNom from "../../../public/assets/PLAQUE-NOM-PERSONNAGE.png";
import Chrono_img from "../../../public/assets/HORLOGE-3.png";
import Coffre from "../../../public/assets/COFFRE.png";

import ImgDegat from "../../../public/assets/BONUS-DEGATS.png";
import ImgBouclier from "../../../public/assets/BONUS-PROTECTION.png";
import ImgSoin from "../../../public/assets/BONUS-SOIN.png";
import ImgSpecial from "../../../public/assets/BONUS-SPECIAL.png";

import symbAddition from "../../../public/assets/ADDITION.png";
import symbSoustraction from "../../../public/assets/SOUSTRACTION.png";
import symbMultiplication from "../../../public/assets/MULTIPLICATION.png";
import symbDivision from "../../../public/assets/DIVISION.png";

import time0 from "../../../public/assets/HORLOGE-0.png";
import time1 from "../../../public/assets/HORLOGE-1.png";
import time2 from "../../../public/assets/HORLOGE-2.png";
import time3 from "../../../public/assets/HORLOGE-3.png";
import time4 from "../../../public/assets/HORLOGE-4.png";
import time5 from "../../../public/assets/HORLOGE-5.png";
import time6 from "../../../public/assets/HORLOGE-6.png";
import time7 from "../../../public/assets/HORLOGE-7.png";
import time8 from "../../../public/assets/HORLOGE-8.png";
import time9 from "../../../public/assets/HORLOGE-9.png";
import time10 from "../../../public/assets/HORLOGE-10.png";
import time11 from "../../../public/assets/HORLOGE-11.png";
import time12 from "../../../public/assets/HORLOGE-12.png";

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
  const [mathSymbol, setMathSymbol] = useState("");
  const [isAttributeDropped, setIsAttributeDropped] = useState(false);
  const symbolArr = ["+", "-", "x", "÷"];
  const [newRound, setNewRound] = useState(true);

  // TIMER
  const [timerImg, setTimerImg] = useState([
    time0,
    time1,
    time2,
    time3,
    time4,
    time5,
    time6,
    time7,
    time8,
    time9,
    time10,
    time11,
    time12,
  ]);
  const [chronoImg, setChronoImg] = useState(time12);
  const [startTime, setStartTime] = useState(null);

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
    {
      id: 1,
      name: "Dégat +10",
      state: "Prêt",
      damage: 10,
      used: false,
      img: ImgDegat,
    },
    {
      id: 2,
      name: "Dégat +20",
      state: "Prêt",
      damage: 20,
      used: false,
      img: ImgDegat,
    },
  ]);

  const [shopEffects, setShopEffects] = useState([
    {
      id: 3,
      name: "Dégat +30",
      state: "Prêt",
      damage: 30,
      used: false,
      img: ImgDegat,
    },
    {
      id: 4,
      name: "Soin +15",
      state: "Prêt",
      heal: 15,
      used: false,
      img: ImgSoin,
    },
    {
      id: 5,
      name: "Bouclier",
      state: "Prêt",
      protection: true,
      used: false,
      img: ImgBouclier,
    },
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
          e.id === effectId ? { ...e, used: true, state: "Utilisé" } : e,
        ),
      );
    }
  };

  useEffect(() => {
    if (newRound) {
      const rand = Math.floor(Math.random() * 3);
      setSymbol(symbolArr[rand]);
      console.log(`Symbol is: ${symbol}`);
      console.log(symbolArr[rand]);
      setStartTime(Date.now());
      setChronoImg(time12);
      if (symbol != "") {
        setIsAttributeDropped(true);
      }
    }
  }, [symbol, newRound]);

  useEffect(() => {
    if (symbol == symbolArr[0]) {
      setMathSymbol(symbAddition);
    }
    if (symbol == symbolArr[1]) {
      setMathSymbol(symbSoustraction);
    }
    if (symbol == symbolArr[2]) {
      setMathSymbol(symbMultiplication);
    }
    if (symbol == symbolArr[3]) {
      setMathSymbol(symbDivision);
    }
  }, [symbol, symbolArr]);

  useEffect(() => {
    if (isAttributeDropped) {
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

  const calculateTurnToOpenShop = (n) => {
    let nbTourOuverture = 0;
    switch (n) {
      case 1:
        nbTourOuverture = 2;
        break;
      case 2:
        nbTourOuverture = 1;
        break;
      case 3:
        nbTourOuverture = 3;
        break;
      case 4:
        nbTourOuverture = 2;
        break;
      case 5:
        nbTourOuverture = 1;
        break;
      case 6:
        nbTourOuverture = 3;
        break;
      case 7:
        nbTourOuverture = 2;
        break;
      case 8:
        nbTourOuverture = 1;
        break;
      case 9:
        nbTourOuverture = 3;
        break;
      case 10:
        nbTourOuverture = 3;
        break;
      case 11:
        nbTourOuverture = 3;
        break;
      case 12:
        nbTourOuverture = 3;
        break;
      default:
        break;
    }
    return nbTourOuverture;
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

  // Timer avec useEffect et setInterval
  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const secondsRemaining = Math.max(0, 60 - Math.floor(elapsed / 1000));

      if (secondsRemaining >= 55) setChronoImg(time12);
      else if (secondsRemaining >= 50) setChronoImg(time11);
      else if (secondsRemaining >= 45) setChronoImg(time10);
      else if (secondsRemaining >= 40) setChronoImg(time9);
      else if (secondsRemaining >= 35) setChronoImg(time8);
      else if (secondsRemaining >= 30) setChronoImg(time7);
      else if (secondsRemaining >= 25) setChronoImg(time6);
      else if (secondsRemaining >= 20) setChronoImg(time5);
      else if (secondsRemaining >= 15) setChronoImg(time4);
      else if (secondsRemaining >= 10) setChronoImg(time3);
      else if (secondsRemaining >= 5) setChronoImg(time2);
      else if (secondsRemaining >= 1) setChronoImg(time1);
      else setChronoImg(time0);

      if (secondsRemaining === 0) {
        // Temps écoulé, forcer une réponse incorrecte
        handlePlayerGuess(-999); // Valeur impossible
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);


  useEffect(() => {
    console.log("isAttributeDropped changed to:", isAttributeDropped);
  }, [isAttributeDropped]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="playfield-container">
      <section className="playfield-central-container">
        {/* Player 1 */}
        <div className="playfield-character-container pcc-player">
          <div className="playfield-character-portrait-name">Oscar</div>
          <div className="playfield-character-portrait">
            <img
              src={Portrait_player}
              alt=""
              className="playfield-character-portrait-img"
            />
          </div>
          <div className="playfield-character-life-container">
            <div
              className="playfield-character-life playfield-player-life"
              style={{ width: `${lifePlayer}%` }}
            ></div>
          </div>
          <div className="playfield-character-life-count">
            {lifePlayer} / 100 PV
          </div>
        </div>
        <div className="playfield-central-area-container">
          <div className="playfield-central-area-chrono">
            <img
              src={chronoImg}
              alt=""
              className="playfield-central-area-chrono-img"
            />
          </div>
          {isAttributeDropped ? (
            <div className="playfield-central-area pca-number pca-left">
              {leftNb}
            </div>
          ) : (
            <div className="playfield-central-area pca-number"></div>
          )}
          <img className="pca-actionV2" src={mathSymbol} alt="" />
          {isAttributeDropped ? (
            <div className="playfield-central-area pca-number pca-right">
              {rightNb}
            </div>
          ) : (
            <div className="playfield-central-area pca-number"></div>
          )}
        </div>

        <div className="playfield-character-container pcc-foe">
          <div className="playfield-character-portrait-name">Multipligator</div>
          <div className="playfield-character-portrait">
            <img
              src={Portrait_boss}
              alt=""
              className="playfield-character-portrait-img"
            />
          </div>
          <div className="playfield-character-life-container">
            <div
              className="playfield-character-life playfield-foe-life"
              style={{ width: `${lifeBoss}%` }}
            ></div>
          </div>
          <div className="playfield-character-life-count">
            {lifePlayer} / 100 PV
          </div>
        </div>
      </section>
      {/* <div>
        {leftNb} {symbol} {rightNb} = {calculateResult()} [Tour de jeu :{" "}
        {playerTurns}]
      </div> */}

      <section className="playfield-bottom">
        {playerCanBuy ? (
          <div className="shop-container">
            <img className="shop-container-img" src={Coffre} alt="" />
            {/* <div>Boutique ouverte</div> */}
          </div>
        ) : null}

        {playerCanBuy ? (
          <div className="shop-container-open">
            <div className="shop-title">Choisis un trésor à récupérer</div>
            <div className="shop-container-effects">
              {shopEffects.map((effect) => (
                <Effet
                  key={effect.id}
                  effectName={effect.name}
                  effectImg={effect.img}
                  onClick={() => buyEffect(effect.id)}
                  isShopOpened={playerCanBuy}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="shop-container">
            {playerTurns == 0 ? (
              <div>
                {/* <span>Ouverture dans 3 tours</span> */}
                <img className="shop-container-img" src={Coffre} alt="" />
              </div>
            ) : (
              <div>
                {/* Ouverture dans {calculateTurnToOpenShop(playerTurns)} tours */}
                <img className="shop-container-img" src={Coffre} alt="" />
              </div>
            )}
            {/* <div>Ouverture au tour 3, 6 et 9.</div> */}
          </div>
        )}

        <Calculator onGuessSubmit={handlePlayerGuess} />
        <div className="deck-container">
          <div className="playfield-central-items-container">
            {playerEffects.map((effect) => (
              <Effet
                key={effect.id}
                effectName={effect.name}
                effectImg={effect.img}
                effectState={effect.used ? "Utilisé" : effect.state}
                isDisabled={effect.used}
                onClick={() => activateEffect(effect.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Playfield;
