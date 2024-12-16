import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import DropShip from "./views/DropShip";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dropship" element={<DropShip />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
