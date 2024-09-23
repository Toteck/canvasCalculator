import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Score from "./pages/Score";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
}

export default App;
