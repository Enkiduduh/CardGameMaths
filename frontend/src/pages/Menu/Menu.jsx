import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
       <Link to="/gameduel">
        <div>Jouer</div>
      </Link>
      <Link to="/cards/collection">
        <div>Collection</div>
      </Link>
    </div>
  );
}

export default Menu;
