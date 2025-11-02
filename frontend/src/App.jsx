import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";
import CardsCollection from "./pages/CardsCollection/CardsCollection";
import CardDisplay from "./pages/CardDisplay/CardDisplay";
import Card from "./components/Card/Card";
import Menu from "./pages/Menu/Menu";
import Gameduel from "./pages/Gameduel/Gameduel";
import GameduelV2 from "./pages/GameduelV2/GameduelV2";
import Error404 from "./pages/Error404/Error404";
import TestPage from "./pages/TestPage/TestPage";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/cards/collection" element={<CardsCollection />} />
          <Route path="/cards/:id" element={<CardDisplay />} />
          <Route path="/cards/numbers/:id" element={<Card />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gameduel" element={<Gameduel />} />
          <Route path="/gameduelV2" element={<GameduelV2 />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
