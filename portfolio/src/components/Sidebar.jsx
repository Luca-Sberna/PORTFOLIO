import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsFillChatFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <Row className="flex-column g-5 d-flex align-items-center">
      <Col className="d-flex justify-content-center align-items-center">
        <GiHamburgerMenu className="fs-3 mt-2" />
      </Col>

      <div className="justify-content-center align-items-center d-flex flex-column ">
        <Col className="flex-grow-1">
          <CiUser className="fs-3" />
        </Col>
        <Col className="flex-grow-1 py-3">
          <PiBagSimpleFill className="fs-3" />
        </Col>
        <Col className="flex-grow-1">
          <BsFillChatFill className="fs-3" />
        </Col>
      </div>

      <Col className="d-flex justify-content-center align-items-center">
        <AiOutlineDownload className="fs-2 " />
      </Col>
    </Row>
  );
};

export default Sidebar;
