import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cabinet = () => (
  <Container>
    <Row>
      <Col>
        <Link to="/addaplication">Application for documents</Link>
      </Col>
      <Col>
        <Link to="/filingapp">Application for documents</Link>
      </Col>
      <Col>
        <Link to="/filingdec">Application for documents</Link>
      </Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3 </Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
