import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
