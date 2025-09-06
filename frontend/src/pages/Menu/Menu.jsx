import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
function Menu() {
  return (
    <div>
       <Link to="/gameduel">
        <div>Jouer</div>
      </Link>
      <Link to="/cards/collection">
        <div>Collection</div>
      </Link>
      <Card/>
      <Card/>
    </div>
  );
}

export default Menu;
