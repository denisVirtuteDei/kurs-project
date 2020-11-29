import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cabinet = () => {
  return (
    <Container style={{padding: "15px"}}>
      <Row>
        <Col>
          <NavLink to="/filingdec">
            <Button >For Employees</Button>
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/taxpayers">
            <Button >For Taxpayers</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
};

export default Cabinet;