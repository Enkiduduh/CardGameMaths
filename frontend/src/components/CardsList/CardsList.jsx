import { useState, useEffect } from "react";

function CardsList() {
  const [dataCards, setDataCards] = useState([]);
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
        setDataCards(data);
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
    <div>
      {dataCards &&
        dataCards.map((card, idx) => (
         <div key={idx}>
            <p>URL: {card.image_url}</p>
            <img
               src={`http://localhost:8080${card.image_url}`}
              alt={card.name || `Card ${idx}`}
              onError={(e) => {
                console.error('Image failed to load:', card.image_url);
                e.target.style.border = '2px solid red';
              }}
              onLoad={() => console.log('Image loaded:', card.image_url)}
            />
          </div>
        ))}
    </div>
  );
}

export default CardsList;
