import React from "react";
import { Container, Form, Button } from "react-bootstrap";


export const AddAplication = () => (
  <Container>
  <Form>
      <>
        <Form.Check type="radio" id="/cabinet" label="radio 1" />
        <Form.Check type="radio" id="" label="radio 2" />
        <Form.Check type="radio" id="" label="radio 3" />
        <Form.Check type="radio" id="" label="radio 4" />
        <Form.Check type="radio" id="" label="radio 5" />
        <Form.Check type="radio" id="" label="radio 6" />
        <Form.Check type="radio" id="" label="radio 7" />
        <Form.Check type="radio" id="" label="radio 8" />
        <Form.Check type="radio" id="" label="radio 9" />
        <Form.Check type="radio" id="" label="radio 10" />
      </>

      <div className="mb-2">
        <Button variant="success" onClick={ () => {} }>Перейти</Button>
      </div>
    </Form>
  </Container>
);
