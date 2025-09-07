import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Card({ card_id }) {
  const [randomNb, setRandomNb] = useState(0);
  const [dataNumbers, setDataNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setRandomNb(Math.floor(Math.random() * 50));
  }, []);

  useEffect(() => {
    const endpoint = card_id
      ? `/api/cards/numbers/${card_id}`
      : `/api/cards/numbers/${id}`;
    fetch(endpoint)
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div className="card-container">{dataNumbers.cost}</div>;
}

export default Card;
