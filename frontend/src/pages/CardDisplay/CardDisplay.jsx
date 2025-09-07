import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function CardDisplay({card_id}) {
  const { id } = useParams();
  const [dataCard, setDataCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = card_id ? `/api/cards/${card_id}` : `/api/cards/${id}`;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDataCard(data);
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
      {dataCard && (
        <div className="cardslist-card-container">
          <div
            className="cardslist-card"
            style={{
              backgroundImage: `url(http://localhost:8080${dataCard.image_url})`,
            }}
          >
            <span className="cardslist-card-element element-name">
              {dataCard.name}
            </span>
            <span className="cardslist-card-element element-id">
              ID{dataCard.id}
            </span>
            <span className="cardslist-card-element element-type">
              {dataCard.card_type}
            </span>
            <div className="cardslist-card-element element-img"></div>
            <span className="cardslist-card-element element-attribute">
              {dataCard.attribute}
            </span>
            <span className="cardslist-card-element element-multiplicator">
              {dataCard.multiplicator}
            </span>
            <span className="cardslist-card-element element-boost">
              {dataCard.boost}
            </span>
            <span className="cardslist-card-element element-collection">
              {dataCard.collection}
            </span>
            <span className="cardslist-card-element element-rule">
              Effet : {dataCard.rule}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDisplay;
