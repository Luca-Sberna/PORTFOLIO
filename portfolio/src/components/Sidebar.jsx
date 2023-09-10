import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsFillChatFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/imgs/Laries Script2.png";

const Sidebar = () => {
  const location = useLocation(); // Ottieni la posizione corrente

  // Funzione per verificare se la posizione corrente corrisponde a una pagina specifica
  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <Row className="sidebar py-1 flex-column g-5 d-flex align-items-center position-relative">
      <Col className="d-flex justify-content-center align-items-center">
        <Link to={"/"} className="red">
          <img src={logo} alt={logo} className="logo pt-1" />
        </Link>
      </Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <div className="justify-content-center align-items-center d-flex flex-column ">
        <Col className="flex-grow-1">
          <Link
            to={"/"}
            className={` ${isActivePage("/") ? "red" : "text-second"}`}
          >
            <CiUser className="img-hover fs-3" />
          </Link>
        </Col>
        <Col className="flex-grow-1 py-3">
          <Link
            to={"/jobs"}
            className={` ${isActivePage("/jobs") ? "red" : "text-second"}`}
          >
            <PiBagSimpleFill className="img-hover fs-3" />
          </Link>
        </Col>
        <Col className="flex-grow-1">
          <Link
            to={"/contact"}
            className={` ${isActivePage("/contact") ? "red" : "text-second"}`}
          >
            <BsFillChatFill className="img-hover fs-3" />
          </Link>
        </Col>
      </div>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <div className="position-absolute cv fw-bold red bounce">CV</div>
      <Col className="d-flex justify-content-center align-items-center">
        <a href="/pdf/CV-Sberna-Luca.pdf" download>
          <AiOutlineDownload className="img-hover fs-2 red" />
        </a>
      </Col>
    </Row>
  );
};

export default Sidebar;
