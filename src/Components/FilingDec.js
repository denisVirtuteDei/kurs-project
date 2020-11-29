import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Toolbar from '@material-ui/core/Toolbar'

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

let placeholders = [
  {
    title: "УНП",
    placeholder: "Введите УНП (9 цифр)"
  },
  {
    title: "ИМНС",
    placeholder: "Введите ИМНС"
  },
  {
    title: "Наименование",
    placeholder: "Введите наименование предприятия"
  },
  {
    title: "Адрес",
    placeholder: "Введите адрес"
  },
  {
    title: "ФИО",
    placeholder: "Введите ФИО"
  },
];


export const FilingDec = () => (
  <Container>
    <Toolbar />
    <div className="mt-2">
      <Form>
        {
          placeholders.map((el) => (
            <Form.Group controlId="formPlaintext">
              <Form.Label sm="7">{el.title}</Form.Label>
              <Form.Control xs="6" type="text" placeholder={el.placeholder} />
            </Form.Group>
          ))
        }
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
  </Container>
)

