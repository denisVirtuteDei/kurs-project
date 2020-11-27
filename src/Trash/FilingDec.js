import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

export const FilingDec = () => (
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
      </Form>
    </div>
    <hr />

    <div className="mt-2">
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Тип декларации</Form.Label>
          <Form.Control as="select">
            <option>Ежемесячная</option>
            <option>Еженедельная</option>
            <option>Еще одна</option>
            <option>And another one</option>
            <option>+1</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>

    <Form>
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Признак внесения изменеия и дополнение в налоговую декларацию`}
          />
        </div>
      ))}
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Использовать данные предыдущего отчетного периода`}
          />
        </div>
      ))}
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Округлять суммы уплаты до наличных`}
          />
        </div>
      ))}
      <hr />
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check type={type} id={`default-${type}`} label={`Ликвидация`} />
        </div>
      ))}
    </Form>
  </Container>
);
