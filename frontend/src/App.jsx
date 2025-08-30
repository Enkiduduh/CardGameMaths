import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './styles/App.css'
import CardsCollection from "./pages/CardsCollection/CardsCollection";
import Error404 from "./pages/Error404/Error404";
import TestPage from "./pages/TestPage/TestPage";
function App() {


  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/cards/collection" element={<CardsCollection />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App
