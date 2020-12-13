import React from "react";
import { Container, Form } from "react-bootstrap";


const IndividRegPart = () => {



  return (
    <Container>
      <div className="mt-2">
        <Form>
          <Form.Group controlId="formPlaintext1">
            <Form.Label sm="6">УНП</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите УНП (9 цифр)" maxlength="9" />
          </Form.Group>
          <Form.Group controlId="formPlaintext2">
            <Form.Label sm="6">ФИО</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите ФИО" />
          </Form.Group>
          <Form.Group controlId="formPlaintext3">
            <Form.Label sm="6">Код паспорта</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите код паспорта" />
          </Form.Group>
          <Form.Group controlId="formPlaintext4">
            <Form.Label sm="6">Персональный нормер</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите персональный номер" />
          </Form.Group>
          <Form.Group controlId="formPlaintext5">
            <Form.Label sm="6">Адрес</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите адрес" />
          </Form.Group>
          <Form.Group controlId="formPlaintext6">
            <Form.Label sm="6">Телефон</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите телефон" />
          </Form.Group>
        </Form>
      </div>
    </Container>
  )
}

export default IndividRegPart;

