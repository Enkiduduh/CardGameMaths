import { useState, useEffect } from "react";

function Card() {
  const [randomNb, setRandomNb] = useState(0);

  useEffect(() => {
    setRandomNb(Math.floor(Math.random() * 50));
  }, [])

  return <div className="card-container">{randomNb}</div>;
}

export default Card;
