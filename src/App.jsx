import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/HomeSection/Home";
import ScrollContainer from "./components/ScrollContainer/ScrollContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<ScrollContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
