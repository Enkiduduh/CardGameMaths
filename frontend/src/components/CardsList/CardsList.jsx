import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardDisplay from "../../pages/CardDisplay/CardDisplay";
import Card from "../Card/Card";
function CardsList() {
  const [dataCards, setDataCards] = useState([]);
  const [dataNumbers, setDataNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setDataCards(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/cards/numbers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setDataNumbers(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cardslist-container">
      <div className="cardslist-cards">
        {dataCards &&
          dataCards.map((card, idx) => (
            <div key={idx}>
              <Link to={`/cards/${card.id}`}>
                <CardDisplay card_id={card.id} />
              </Link>
            </div>
          ))}
      </div>
      <div className="cardslist-cardsnumber">
        {dataNumbers &&
          dataNumbers.map((card, idx) => (
            <div key={idx}>
              <Link to={`/cards/numbers/${card.id}`}>
                <Card card_id={card.id} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardsList;
