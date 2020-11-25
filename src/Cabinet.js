import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export const Cabinet = () => (
  <Container>
    <Row>
      <Col>
        <a href="#">Application for documents</a>
      </Col>
      <Col>
        <a href="/filingapp">FilingApp</a>
      </Col>
      <Col>3 of 3</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3 </Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
