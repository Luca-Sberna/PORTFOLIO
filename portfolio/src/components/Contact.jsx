import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const Contact = () => {
  return (
    <div className="custom-bg">
      <Col className="d-md-none">
        <Topbar />
      </Col>
      <Container className="vertical-center-container">
        <Row>
          <Col
            xs={"1"}
            className="d-none d-md-block template-secondary bg-color"
          >
            <Sidebar />
          </Col>
          <Col className="bg-color p-4">
            <h1 className="text-white fw-bold pb-4">Contatti</h1>
            <Col className="text-white fw-bold fs-5">Informazioni</Col>
            <Row>
              <Col className="d-flex pb-3">
                <Col>
                  <Col className="text-second">Via Filippo De Pisis 13</Col>
                  <Col className="text-second">
                    MI - 20157 - +39 339-5879853
                  </Col>
                  <Col className="text-second">sberna.luca.dev@gmail.com</Col>
                </Col>
              </Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.911564927643!2d9.138328476608587!3d45.51185883025697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c05b2a961a4d%3A0x32b1d0c6043181c7!2sVia%20Filippo%20de%20Pisis%2C%2013%2C%2020157%20Milano%20MI!5e0!3m2!1ses!2sit!4v1693843109216!5m2!1ses!2sit"
                width="400"
                height="350"
                style={{ border: "0" }} // Utilizzo di un oggetto JavaScript per gli stili
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Row>
            <div className="pt-5 d-flex justify-content-around">
              <Link
                target="_blank"
                to={
                  "https://www.linkedin.com/in/luca-sberna-full-stack-developer/"
                }
                className="text-reset _blank"
              >
                <FaLinkedinIn className="fs-1 img-hover-contact" />
              </Link>
              <Link
                target="_blank"
                to={"https://github.com/Luca-Sberna"}
                className="text-reset "
              >
                <FiGithub className="fs-1 img-hover-contact" />
              </Link>
              <Link
                target="_blank"
                to={`mailto:${"sberna.luca.dev@gmail.com"}`}
                className="text-reset "
              >
                <HiOutlineMail className="fs-1 img-hover-contact" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
