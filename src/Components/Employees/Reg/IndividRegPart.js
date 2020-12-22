import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const SelfRegPart = (props) => {

  const enterClick = () => {
    const username = window.sessionStorage.getItem('username');
    if (username !== '') {
      const regInfo = {
        username,
        ncea,
        regDate
      }
      const password = props.generatePassword();

      const person = {
        unp,
        firstName: fio.split(' ')[0],
        secondName: fio.split(' ')[1],
        middleName: fio.split(' ')[2],
        passportCode: code,
        personalNumber: number,
        personalAddress: address,
        telephone
      }

      props.createIndividPerson({ person, password }, regInfo)
    }
  }

  const [unp, setUnp] = useState('');
  const [fio, setFio] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [ncea, setNcea] = useState('');
  const [regDate, setStartDate] = useState(new Date());

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      if (event.target.name === "unp")
        setUnp(event.target.value)
      else if (event.target.name === "personal_number")
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
          <Form.Group controlId="formPlaintext3">
            <Form.Label sm="6">ФИО</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="fio"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
              placeholder="Введите ФИО" />
          </Form.Group>
          <Form.Group controlId="formPlaintext4">
            <Form.Label sm="6">Код паспорта</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="passport_code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Введите код паспорта (2 буквы)"
              maxLength="2" />
          </Form.Group>
          <Form.Group controlId="formPlaintext4">
            <Form.Label sm="6">Персональный номер</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="personal_number"
              value={number}
              onChange={handleChange}
              placeholder="Введите номер паспорта (7 цифр)"
              maxLength="7" />
          </Form.Group>
          <Form.Group controlId="formPlaintext5">
            <Form.Label sm="6">Адрес пребывания</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Введите адрес" />
          </Form.Group>
          <Form.Group controlId="formPlaintext6">
            <Form.Label sm="6">Телефон</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Введите телефон" />
          </Form.Group>
          <Form.Group controlId="formPlaintext7">
            <Form.Label sm="6">ОКЭД</Form.Label>
            <div>
              <Select
                labelId="select-outlined-label"
                id="select-outlined"
                name="ncea"
                value={ncea}
                onChange={(e) => setNcea(e.target.value)}
                label="ОКЭД"
                style={{
                  width: "250px",
                  marginTop: "10px"
                }}
              >
                {
                  props.nceaInfoList ?
                    props.nceaInfoList.map((el) => {
                      return (
                        <MenuItem value={el.id}>{el.ncea}</MenuItem>
                      )
                    }) : <MenuItem value="1">None</MenuItem>
                }
              </Select>
            </div>
          </Form.Group>

          <hr style={{ marginTop: "20px" }} />

          <Grid container spacing={2} style={{ marginTop: "15px" }}>
            <Grid item xs={3}>
              <Form.Label sm="6">Дата регистрации</Form.Label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="inline-start-date"
                  value={regDate}
                  onChange={(date) => setStartDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              style={{ float: "right", margin: "15px", marginBottom: "50px" }}
              onClick={enterClick}
              size="large"
            >
              Registrate
            </Button>
          </Grid>
        </Form>
      </div>
    </Container>
  )
}

export default SelfRegPart;

