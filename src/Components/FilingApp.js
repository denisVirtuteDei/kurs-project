import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

export const FilingApp = () => (
  <Container>
    <div className="mt-2">
      <Form>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            УНП
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="Введите УНП (9 цифр)" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            ИМНС
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="Введите ИМНС" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Наименование
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="Введите наименование пердприятия"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Адрес
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="Введите адрес" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            ФИО
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="Введите ФИО" />
          </Col>
        </Form.Group>
        <hr />
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Наименование гос. органа, осуществившего регистрацию
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Дата решения о гос. регистрации
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Номер решения о государственной регистрации
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="7">
            Регистрационный номер в Едином гос. регистре юредических лиц и
            индивидуальных предпренимателей
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
      </Form>
    </div>
    <hr />
  </Container>
);
