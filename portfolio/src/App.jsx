import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="pt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
