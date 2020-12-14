import React from "react";
import { Container, Form } from "react-bootstrap";


const IndividRegPart = () => {

  const [unp, setUnp] = React.useState('');
  const [number, setNumber] = React.useState('');

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      if (event.target.name === "unp")
        setUnp(event.target.value)
      else if (event.target.name === "number")
        setNumber(event.target.value)
    }
  }

  return (
    <Container>
      <div className="mt-2">
        <Form>
          <Form.Group controlId="formPlaintext1">
            <Form.Label sm="6">УНП</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="unp"
              value={unp}
              onChange={handleChange}
              placeholder="Введите УНП (9 цифр)"
              maxLength="9" />
          </Form.Group>
          <Form.Group controlId="formPlaintext2">
            <Form.Label sm="6">ФИО</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите ФИО" />
          </Form.Group>
          <Form.Group controlId="formPlaintext3">
            <Form.Label sm="6">Код паспорта</Form.Label>
            <Form.Control xs="6" type="text" placeholder="Введите код паспорта (2 буквы)" maxLength="2" />
          </Form.Group>
          <Form.Group controlId="formPlaintext4">
            <Form.Label sm="6">Персональный номер</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="Введите персональный номер (9 цифр)"
              maxLength="9" />
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

