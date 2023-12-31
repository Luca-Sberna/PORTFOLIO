import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsFillChatFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/imgs/Laries Script2.png";

const Topbar = () => {
  const location = useLocation(); // Ottieni la posizione corrente

  // Funzione per verificare se la posizione corrente corrisponde a una pagina specifica
  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    <div className="topbar  w-100 px-2 bg-custom  d-flex justify-content-between align-items-center ">
      <div>
        <Link to={"/"} className="red">
          <img src={logo} alt={logo} className="logo pt-1 h-75" />
        </Link>
      </div>

      <div className="center">
        <Link
          to={"/"}
          className={` ${isActivePage("/") ? "red" : "text-second"}`}
        >
          <CiUser className="img-hover fs-3" />
        </Link>
        <Link
          to={"/jobs"}
          className={`px-4 ${isActivePage("/jobs") ? "red" : "text-second"}`}
        >
          <PiBagSimpleFill className="img-hover fs-3" />
        </Link>
        <Link
          to={"/contact"}
          className={` ${isActivePage("/contact") ? "red" : "text-second"}`}
        >
          <BsFillChatFill className="img-hover fs-3" />
        </Link>
      </div>

      <div className="right position-relative">
        <a href="/pdf/CV-Sberna-Luca.pdf" download>
          <AiOutlineDownload className="img-hover fs-2 red" />
        </a>
        <div className="position-absolute cv-topbar fw-bold red bounce-left">
          CV
        </div>
      </div>
    </div>
  );
};

export default Topbar;
