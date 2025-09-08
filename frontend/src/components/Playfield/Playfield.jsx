import { useState, useEffect } from "react";
import { shuffle } from "../../logic/shuffle";
import CardDisplay from "../../pages/CardDisplay/CardDisplay";
import Card from "../Card/Card";

function Playfield() {
  const [dataCards, setDataCards] = useState([]);
  const [newDataCards, setNewDataCards] = useState([]);
  const [dataNumbers, setDataNumbers] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [wastepile, setWastepile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lifePlayer, setLifePlayer] = useState(20);
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [startGame, setStartGame] = useState(true);

  // États pour les cartes jouées
  const [playedCards, setPlayedCards] = useState({
    1: null, // case 1
    2: null, // case 2
    3: null, // case 3
  });

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
    fetch("/api/cards/numbers/deckready")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDataNumbers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (dataCards.length > 0 && dataNumbers.length > 0) {
      const newNumbers = dataNumbers.slice(0, 20);
      const newDeck = dataCards.slice(0, 15);

      setNumbers(newNumbers);

      const finalDeck = [...newDeck, ...newNumbers];
      const shuffledDeck = shuffle(finalDeck);

      console.log("Final deck:", finalDeck);
      console.log("Final shuffled deck:", shuffledDeck);

      const newHand = shuffledDeck.slice(0, 5);
      setDeck(shuffledDeck.slice(5, 35));
      setHand(newHand);
      console.log(newHand);

      setStartGame(false); // Éviter que ça se répète
    }
  }, [dataCards, dataNumbers, startGame]);

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

  const handleDragStart = (e, card) => {
    // Transmettre l'ID de la carte et son index dans la main
    const dragData = JSON.stringify({
      cardId: card.id,
      cardType: card.card_type,
      handIndex: hand.findIndex((c) => c.id === card.id),
    });
    e.dataTransfer.setData("text/plain", dragData);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Nécessaire pour autoriser le drop
  };

  const handleDrop = (e, caseId) => {
    try {
      const dragData = JSON.parse(e.dataTransfer.getData("text/plain"));
      const { cardId, cardType, handIndex } = dragData;

      // Vérifier si la case accepte ce type de carte
      const isValidDrop = validateDrop(caseId, cardType);
      if (!isValidDrop) {
        console.log("Drop non valide pour cette case");
        return;
      }

      // Trouver la carte dans la main
      const cardToPlay = hand[handIndex];
      if (!cardToPlay) {
        console.log("Carte non trouvée dans la main");
        return;
      }

      // Mettre à jour les cartes jouées
      setPlayedCards((prev) => ({
        ...prev,
        [caseId]: cardToPlay,
      }));

      // Retirer la carte de la main
      const newHand = hand.filter((_, index) => index !== handIndex);
      setHand(newHand);
    } catch (error) {
      console.error("Erreur lors du drop:", error);
    }
  };

  // Fonction pour valider si une carte peut être posée sur une case
  const validateDrop = (caseId, cardType) => {
    // Cases 1 et 3 : seulement les cartes Number
    if ((caseId === "1" || caseId === "3") && cardType !== "Number") {
      return false;
    }
    // Case 2 : seulement les cartes Action (pas Number)
    if (caseId === "2" && cardType === "Number") {
      return false;
    }
    return true;
  };

  // Fonction pour retirer une carte d'une case
  const removeCardFromCase = (caseId) => {
    const cardToRemove = playedCards[caseId];
    if (cardToRemove) {
      // Remettre la carte dans la défausse
      setWastepile((prev) => [...prev, cardToRemove]);

      // Retirer de la case
      setPlayedCards((prev) => ({
        ...prev,
        [caseId]: null,
      }));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="playfield-container">
      {/* <div className="playfield-adversary-container">
        <div className="playfield-player player-deck"></div>
        <div className="playfield-player player-area"></div>
      </div> */}

      <div className="playfield-central-container">
        <div
          className="playfield-central-area pca-number"
          data-case="1"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "1")}
          onClick={() => removeCardFromCase("1")}
        >
          {playedCards["1"] && <Card card_id={playedCards["1"].id} />}
        </div>
        <div
          className="playfield-central-area pca-action"
          data-case="2"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "2")}
          onClick={() => removeCardFromCase("2")}
        >
          {playedCards["2"] && <CardDisplay card_id={playedCards["2"].id} />}
        </div>
        <div
          className="playfield-central-area pca-number"
          data-case="3"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "3")}
          onClick={() => removeCardFromCase("3")}
        >
          {playedCards["3"] && <Card card_id={playedCards["3"].id} />}
        </div>
      </div>

      <div className="playfield-player-container">
        <div className="playfield-player player-area">
          {hand &&
            hand.map((card, id) => (
              <div
                key={id}
                className={`playfield-player-card ppc-${id}`}
                draggable
                onDragStart={(e) => handleDragStart(e, card)}
              >
                {card.card_type === "Number" ? (
                  <Card card_id={card.id} />
                ) : (
                  <CardDisplay card_id={card.id} />
                )}
              </div>
            ))}
        </div>
        <div className="playfield-player-decks-container">
          <div
            className="playfield-player-objet-wastepile"
            onClick={addCardDeck}
          >
            Vie
            <span>{lifePlayer}</span>
          </div>
          <div className="playfield-player-objet-deck" onClick={addCardDeck}>
            Deck
            <span>{deck.length}</span>
          </div>
          <div
            className="playfield-player-objet-wastepile"
            onClick={addCardDeck}
          >
            Défausse
            <span>{wastepile.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playfield;
