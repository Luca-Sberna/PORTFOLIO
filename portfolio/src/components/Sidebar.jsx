import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsFillChatFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Ottieni la posizione corrente

  // Funzione per verificare se la posizione corrente corrisponde a una pagina specifica
  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <Row className="flex-column g-5 d-flex align-items-center">
      <Col className="d-flex justify-content-center align-items-center">
        <Link className="red">
          <GiHamburgerMenu className="img-hover fs-3 mt-2" />
        </Link>
      </Col>
      <Col></Col>
      <div className="justify-content-center align-items-center d-flex flex-column ">
        <Col className="flex-grow-1">
          <Link
            to={"/"}
            className={` ${isActivePage("/") ? "red" : "text-reset"}`}
          >
            <CiUser className="img-hover fs-3" />
          </Link>
        </Col>
        <Col className="flex-grow-1 py-3">
          <Link
            to={"/jobs"}
            className={` ${isActivePage("/jobs") ? "red" : "text-reset"}`}
          >
            <PiBagSimpleFill className="img-hover fs-3" />
          </Link>
        </Col>
        <Col className="flex-grow-1">
          <Link
            to={"/contact"}
            className={` ${isActivePage("/contact") ? "red" : "text-reset"}`}
          >
            <BsFillChatFill className="img-hover fs-3" />
          </Link>
        </Col>
      </div>

      <Col></Col>
      <Col></Col>
      <Col className="d-flex justify-content-center align-items-center">
        <a href="/pdf/CV-Luca-Sberna.pdf" download>
          <AiOutlineDownload className="img-hover fs-2 red" />
        </a>
      </Col>
    </Row>
  );
};

export default Sidebar;
