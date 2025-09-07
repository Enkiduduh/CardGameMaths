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

  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [startGame, setStartGame] = useState(true);

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


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="playfield-container">
      <div className="playfield-adversary-container">
        <div className="playfield-player player-deck"></div>
        <div className="playfield-player player-area"></div>
      </div>

      <div className="playfield-central-container">
        <div className="playfield-central-area"></div>
        <div className="playfield-central-area"></div>
        <div className="playfield-central-area"></div>
        <div className="playfield-central-area"></div>
        <div className="playfield-central-area"></div>
      </div>

      <div className="playfield-player-container">
        <div className="playfield-player player-area">
          {hand &&
            hand.map((card, id) => (
              <div key={id} className={`playfield-player-card ppc-${id}`}>
                {card.card_type === "Number" ? (
                  <Card card_id={card.id} />
                ) : (
                  <CardDisplay card_id={card.id} />
                )}
              </div>
            ))}
        </div>
        <div className="playfield-player-decks-container">
          <div className="playfield-player player-wastepile">
            <div
              className="playfield-player-objet-wastepile"
              onClick={addCardDeck}
            >
              Défausse
              <span>{wastepile.length}</span>
            </div>
          </div>
          <div className="playfield-player player-deck">
            <div className="playfield-player-objet-deck" onClick={addCardDeck}>
              Deck
              <span>{deck.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playfield;
