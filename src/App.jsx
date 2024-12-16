import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import DropShip from "./views/DropShip";
import ContactUs from "./views/ContactUs";
import Shop from "./views/Shop";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dropship" element={<DropShip />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
