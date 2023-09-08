import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import bgProject from "../assets/imgs/6.jpg";
import { FiGithub } from "react-icons/fi";
import Topbar from "./Topbar";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Stack"); // Imposta la categoria predefinita

  // Funzione per gestire il cambio di categoria
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="custom-bg">
      <Col className="d-md-none">
        <Topbar />
      </Col>
      <Container className=" vertical-center-container">
        <Row>
          <Col
            xs={"1"}
            className="d-none d-md-block template-secondary bg-color"
          >
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
                  <Card className="card-job position-relative custom-bg-projects img-hover">
                    <Card.Body className="text-white">
                      <Card.Title>
                        <span className="red fw-bold">Capstone Project</span>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 ">
                        <span className="fw-bold">
                          {" "}
                          Progetto finale di Epicode
                        </span>
                        <hr className="m-0 mt-3 red " />
                      </Card.Subtitle>
                      <Card.Text>
                        Portale di giochi retrò con due giochi creati da me ,
                        l'applicazione offre la possibilita agli utenti di
                        scalare una classifica generale ad ogni partita
                        effettuata...
                      </Card.Text>
                      <Card.Link
                        target="_blank"
                        className="red text-decoration-none fw-bold "
                        href="https://github.com/Luca-Sberna/CAPSTONE-PROJECT"
                      >
                        <FiGithub className="fs-2 img-hover-contact" />
                      </Card.Link>
                    </Card.Body>
                  </Card>
                )}

                {selectedCategory === "Front-End" && (
                  <Row className="gap-5">
                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Progetto Linkedin</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold"> Clone di Linkedin</span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Questo progetto rappresenta il clone del Front-End di
                          Linkedin
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/REACT-W3-PROJECT-LINKEDIN"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Progetto Spotify</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold"> Clone di Spotify</span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Questo progetto rappresenta il clone del Front-End di
                          Spotify
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/spotify-clone"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Progetto Netflix</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold"> Clone di Netflix</span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Questo progetto rappresenta il clone del Front-End di
                          Netflix
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/netflix-cone"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Weather Project</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold">App Meteorologica</span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Questo progetto rappresenta un'app meteorologica in
                          scala mondiale
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/weather-project"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Row>
                )}

                {selectedCategory === "Back-End" && (
                  <Row className="gap-5">
                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover h-75"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Build Week Java 1</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold">
                            {" "}
                            Azienda di trasporti pubblici locali
                          </span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Questo progetto prevede la realizzazione di un sistema
                          completo per la gestione dei trasporti pubblici.
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/JAVA-U1-BW"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className="card-job position-relative custom-bg-projects img-hover"
                    >
                      <Card.Body className="text-white">
                        <Card.Title>
                          <span className="red fw-bold">Build Week Java 2</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 ">
                          <span className="fw-bold">
                            {" "}
                            Azienda fornitrice di energia
                          </span>
                          <hr className="m-0 mt-3 red " />
                        </Card.Subtitle>
                        <Card.Text>
                          Backend per il sistema CRM di "EPIC ENERGY SERVICES",
                          un'azienda fornitrice di energia. Fornisce
                          funzionalità per gestire i contatti con i clienti
                          business. Sono stati implementati file CSV per le
                          regioni italiane .
                        </Card.Text>
                        <Card.Link
                          target="_blank"
                          className="red text-decoration-none fw-bold "
                          href="https://github.com/Luca-Sberna/JAVA-U2-BW"
                        >
                          <FiGithub className="fs-2 img-hover-contact" />
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
