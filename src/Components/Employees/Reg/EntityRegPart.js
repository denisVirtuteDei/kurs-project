import React from "react";
import { Container, Form } from "react-bootstrap";


const EntityRegPart = () => {



  return (
    <Container>
      <div className="mt-2">
        <Form>
          <Form.Group controlId="formPlaintext1">
            <Form.Label sm="6">УНП</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите УНП (9 цифр)" maxlength="9" />
          </Form.Group>
          <Form.Group controlId="formPlaintext2">
            <Form.Label sm="6">Наименование</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите наименование предприятия" />
          </Form.Group>
          <Form.Group controlId="formPlaintext3">
            <Form.Label sm="6">ФИО</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите ФИО" />
          </Form.Group>
          <Form.Group controlId="formPlaintext4">
            <Form.Label sm="6">Номер паспорта</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите номер паспорта (9 цифр)" />
          </Form.Group>
          <Form.Group controlId="formPlaintext5">
            <Form.Label sm="6">Адрес организации</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите адрес организации" />
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

export default EntityRegPart;

