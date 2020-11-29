import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Cabinet = () => (
  <Container>
    <Row>
      <Col>
        <NavLink to="/filingdec">
          <Button >For Employees</Button>
        </NavLink>
      </Col>
      <Col>
        <NavLink to="/filingapp">
          <Button >For Taxpayers</Button>
        </NavLink>
      </Col>
    </Row>
  </Container>
);
