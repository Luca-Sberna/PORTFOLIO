import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Stack"); // Imposta la categoria predefinita

  // Funzione per gestire il cambio di categoria
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="vertical-center-container">
      <Row>
        <Col xs={"1"} className="template-secondary bg-color">
          <Sidebar />
        </Col>
        <Col className="bg-color px-0">
          <Card className="bg-transparent ">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link
                    href="#first"
                    onClick={() => handleCategoryChange("Full Stack")}
                  >
                    <span
                      className={`red fw-bold ${
                        selectedCategory === "Full Stack" && "active"
                      }`}
                    >
                      Full Stack
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#second"
                    onClick={() => handleCategoryChange("Front-End")}
                  >
                    <span
                      className={`red fw-bold ${
                        selectedCategory === "Front-End" && "active"
                      }`}
                    >
                      Front-End
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#third"
                    onClick={() => handleCategoryChange("Back-End")}
                  >
                    <span
                      className={`red fw-bold ${
                        selectedCategory === "Back-End" && "active"
                      }`}
                    >
                      Back-End
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {/* Mostra le card solo per la categoria selezionata */}
              {selectedCategory === "Full Stack" && (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Capstone Project</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Progetto finale di Epicode
                    </Card.Subtitle>
                    <Card.Text>
                      Portale di giochi retrò con due giochi creati da me ,
                      l'applicazione offre la possibilita agli utenti di scalare
                      una classifica generale ad ogni partita effettuata...
                    </Card.Text>
                    <Card.Link
                      target="_blank"
                      className="red text-decoration-none fw-bold"
                      href="https://github.com/Luca-Sberna/CAPSTONE-PROJECT"
                    >
                      Git
                    </Card.Link>
                  </Card.Body>
                </Card>
              )}

              {selectedCategory === "Front-End" && (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title front</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              )}

              {selectedCategory === "Back-End" && (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title back</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
