import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

let checkboxValues = [
  {
    type: "Признак внесения изменеия и дополнение в налоговую декларацию",
    id: 0
  },
  {
    type: "Использовать данные предыдущего отчетного периода",
    id: 1
  },
  {
    type: "Округлять суммы уплаты до наличных",
    id: 2
  }
]

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
          </Form.Control>
        </Form.Group>
      </Form>
    </div>

    {/* <Form>
      {checkboxValues.map((value) => (
        <div key={`default-checkbox-${value.id}`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`default-checkbox-${value.id}`}
            label={value.type}
          />
        </div>
      ))}
      <hr />
      {["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check type={type} id={`default-${type}`} label={`Ликвидация`} />
        </div>
      ))}
    </Form> */}
  </Container>
)

