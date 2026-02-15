import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";
import Menu from "./pages/Menu/Menu";
import GameduelV2 from "./pages/GameduelV2/GameduelV2";
import Error404 from "./pages/Error404/Error404";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/gameduelV2" element={<GameduelV2 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
