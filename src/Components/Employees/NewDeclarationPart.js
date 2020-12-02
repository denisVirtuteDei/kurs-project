import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Toolbar from '@material-ui/core/Toolbar'

export const NewDeclarationPart = () => (
  <Container>
  <Toolbar />
  <h1>Person Activity</h1>
  <div>
    <Form>
      <Row className="mt-3">
        <Col>
          {" "}
          <Form.Control type="text" placeholder="WATAFAK" />
        </Col>
        <Col>
          {" "}
          <Form.Control type="text" placeholder="WATAFAK" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={6}>
          {" "}
          <Form.Control type="text" placeholder="WATAFAK" />
        </Col>
        <Col>
        <Form.Group controlId="formGridState">
    
    <Form.Control as="select" defaultValue="Choose...">
      <option>Choose...</option>
      <option>choose one more...</option>
    </Form.Control>
    </Form.Group>
        </Col>
      </Row>
    </Form>
    <Button className="float-right mt-5"  as="input" type="submit" value="Sent" />
  </div>
</Container>
)

