import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import foto from "../assets/imgs/foto.png";

const Home = () => {
  return (
    <Container className=" position-relative">
      <Row>
        <Col xs={"1"} className="template-secondary bg-secondary">
          <Sidebar />
        </Col>
        <Col xs={"4"} className=" justify-content-center d-flex ">
          <img fluid src={foto} alt={foto} className="foto position-absolute" />
          <div className="social position-absolute bottom-0 text-center  ">
            <h1>Luca Sberna</h1>
            <span>Full Stack Developer</span>
            <div className="text-center">
              <AiFillGithub />
              <BsLinkedin />
            </div>
          </div>
        </Col>
        <Col className="p-3 ps-5 bg-secondary template-secondary">
          <h2 className="fw-bold">Su di me</h2>
          <div className="d-flex gap-4">
            <p className="fw-bold">27 anni</p>
            <span>/</span>
            <p className="fw-bold">Milano,IT</p>
          </div>
          <p>description</p>
          <hr />
          <h3 className="py-2 fw-bold">I miei Servizi</h3>
          <Row>
            <Col xs={6}>
              <div className="fs-3">🖥️</div>
              <div className="fw-bold">Development</div>
              <div>descr</div>
            </Col>
            <Col xs={6}>
              <div className="fs-3">🚀</div>
              <div className="fw-bold">Code Optimization</div>
              <div>descr</div>
            </Col>
            <Col className="mt-3">
              <div className="fs-3">🛡️</div>
              <div className="fw-bold">Data Security</div>
              <div>descr</div>
            </Col>
            <Col className="mt-3">
              <div className="fs-3">📚</div>
              <div className="fw-bold">Database</div>
              <div>descr</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
