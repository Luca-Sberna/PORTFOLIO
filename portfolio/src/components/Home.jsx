import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import foto from "../assets/imgs/foto-2.png";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const Home = () => {
  return (
    <div className="custom-bg ">
      <Col className="d-md-none ">
        <Topbar />
      </Col>
      <Container className="px-0 position-relative vertical-center-container">
        <Row>
          <Col className="h-75 d-none d-md-block template-secondary bg-color">
            <Sidebar />
          </Col>
          <Col xs={"4"} className=" justify-content-center d-flex ">
            <img
              fluid
              src={foto}
              alt={foto}
              className="foto d-none d-md-block position-absolute"
            />
            <img
              fluid
              src={foto}
              alt={foto}
              className="d-md-none foto-mobile position-absolute"
            />
            <div className="social d-none d-md-block position-absolute text-center  ">
              <h1>Luca Sberna</h1>
              <span className="red py-4 fw-bold">Full Stack Developer</span>
              <div className="text-center pt-2">
                <Link
                  target="_blank"
                  to={"https://github.com/Luca-Sberna"}
                  className="text-reset "
                >
                  <AiFillGithub className="img-hover fs-3 me-3" />
                </Link>
                <Link
                  target="_blank"
                  to={`mailto:${"sberna.luca.dev@gmail.com"}`}
                  className="text-reset "
                >
                  <MdEmail className="img-hover fs-3 me-3" />
                </Link>
                <Link
                  target="_blank"
                  to={
                    "https://www.linkedin.com/in/luca-sberna-full-stack-developer/"
                  }
                  className="text-reset _blank"
                >
                  <BsLinkedin className="img-hover fs-3" />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            md={"7"}
            className="py-5 px-3 p-md-3  bg-color template-secondary"
          >
            <h2 className="fw-bold text-white">Su di me</h2>
            <div className="d-flex gap-4">
              <p className="red fw-bold">27 anni</p>
              <span className="text-second">/</span>
              <p className="red fw-bold">Milano,IT</p>
            </div>
            <p className="text-second">
              Sono un appassionato sviluppatore Full Stack con una fervida
              dedizione per il mio settore. Sono sempre aperto a nuove
              opportunità, inclusa la possibilità di una rilocazione, purché si
              tratti di una proposta stimolante. Il mio ambiente di lavoro è
              altamente efficiente, dotato di un computer di ultima generazione
              e una configurazione a doppio schermo che mi consente di
              massimizzare la produttività. Questo mi permette di gestire
              compiti complessi con rapidità e precisione. La mia motivazione è
              intrinsecamente legata alla crescita professionale. Attualmente,
              sto lavorando per diventare un esperto nel settore dello sviluppo
              Full Stack e sto ampliando le mie conoscenze anche nell'ambito
              dell'Intelligenza Artificiale (AI). Credo che la combinazione di
              queste competenze mi renderà un professionista più completo e
              preparato per affrontare le sfide del futuro.
            </p>
            <hr className="text-second" />
            <h3 className="py-2 fw-bold text-white">I miei Servizi</h3>
            <Row>
              <Col xs={12} md={6}>
                <div className="fs-3">🖥️</div>
                <div className="fw-bold text-white">Development</div>
                <div className="text-second">
                  Competente nello sviluppo di applicazioni web e software, con
                  una solida comprensione dei principi di progettazione e
                  sviluppo.
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="fs-3">🚀</div>
                <div className="fw-bold text-white">Code Optimization</div>
                <div className="text-second">
                  Ho la capacità di migliorare le prestazioni delle
                  applicazioni, riducendo i tempi di caricamento e l'utilizzo
                  delle risorse.
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-3">
                <div className="fs-3">🛡️</div>
                <div className="fw-bold text-white">Data Security</div>
                <div className="text-second">
                  Ho esperienza nella protezione delle applicazioni web da
                  minacce comuni attraverso strumenti come bcrypt, JWT, e nella
                  creazione di meccanismi di sicurezza robusti.
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-3">
                <div className="fs-3">📚</div>
                <div className="fw-bold text-white">Database</div>
                <div className="text-second">
                  Competente nella gestione dei database relazionali, in
                  particolare PostgreSQL, e nell'ottimizzazione delle query per
                  garantire un accesso efficiente ai dati.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
