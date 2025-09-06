import { useState, useEffect } from "react";
import CardDisplay from "../../pages/CardDisplay/CardDisplay";
import Card from "../Card/Card";

function Playfield() {
  const [dataCards, setDataCards] = useState([]);
  const [newDataCards, setNewDataCards] = useState([]);
  const [dataNumbers, setDataNumbers] = useState([]);
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);

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
    setDataNumbers();
  }, []);

  useEffect(() => {
    setHand(dataCards.slice(0, 5));
    setDeck(dataCards.slice(5, 15));
    console.log(hand);
    console.log(deck);
  }, [dataCards]);

  useEffect(() => {
    if (isDeckEmpty) {
      if (deck.length > 0) {
        setHand(...[hand], hand.push(deck[0]));
        setDeck(...[deck], deck.shift(deck));
        // console.log(deck);
        // console.log(hand);
        setIsDeckEmpty(false);
      }
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
                <CardDisplay card_id={card.id} />
              </div>
            ))}
        </div>
        <div className="playfield-player player-deck">
          <div className="playfield-player-objet-deck" onClick={addCardDeck}>
            Deck
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playfield;
