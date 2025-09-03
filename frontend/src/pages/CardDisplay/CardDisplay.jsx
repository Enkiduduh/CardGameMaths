import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function CardDisplay() {
  const { id } = useParams();
  console.log({ id });
  const [dataCard, setDataCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/cards/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDataCard(data);
        setLoading(false);
        console.log(data);
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
          <div className="cardslist-card">
            <div className="cardslist-card-line">
              <span>Nom: {dataCard.name}</span>
              <span>ID: {dataCard.id}</span>
              <span>Type: {dataCard.card_type}</span>
            </div>
            <div className="cardslist-card-line">
              <span>Attribut: {dataCard.attribute}</span>
              <span>Niveau: {dataCard.multiplicator}</span>
              <span>Type d'effet: {dataCard.boost}</span>
            </div>
            <div className="cardslist-card-line">
              <span>Effet : {dataCard.rule}</span>
            </div>
            <div className="cardslist-card-line">
              <span>Coût en boutique : {dataCard.cost} gold</span>
            </div>
          </div>
          <img
            className="cardslist-card-img"
            src={`http://localhost:8080${dataCard.image_url}`}
            alt={dataCard.name}
            onError={(e) => {
              console.error("Image failed to load:", dataCard.image_url);
              e.target.style.border = "2px solid red";
            }}
            onLoad={() => console.log("Image loaded:", dataCard.image_url)}
          />
        </div>
      )}
    </div>
  );
}

export default CardDisplay;
