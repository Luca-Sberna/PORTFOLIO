import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";

function App() {
  return (
    <Container fluid className="px-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
