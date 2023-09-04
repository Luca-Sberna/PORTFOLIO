import React from "react";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const Jobs = () => {
  return (
    <Container className="vertical-center-container">
      <Row>
        <Col xs={"1"} className="template-secondary bg-color">
          <Sidebar />
        </Col>
        <Col className="bg-color"></Col>
      </Row>
    </Container>
  );
};

export default Jobs;
