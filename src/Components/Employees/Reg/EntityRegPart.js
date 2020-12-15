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


const EntityRegPart = (props) => {

  const enterClick = () => {
    const registration = {
      id: 0,
      fkPerson: 0,
      ncea,
      startDate
    }

    if (endDate > startDate) {
      const password = props.generatePassword();
      debugger
      const entity = {
        unp,
        shortOrgTitle: title,
        firstName: fio.split(' ')[0],
        secondName: fio.split(' ')[1],
        middleName: fio.split(' ')[2],
        passportNumber: number,
        orgAddress,
        telephone
      }

      console.log([entity, registration, password]);
    }
  }

  const [unp, setUnp] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [fio, setFio] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [orgAddress, setOrgAddress] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [ncea, setNcea] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      if (event.target.name === "unp")
        setUnp(event.target.value)
      else if (event.target.name === "passport")
        setNumber(event.target.value)
    }
  }

  useEffect(() => {
    //props.fetchAllNceaInfo();
  }, [])

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
            <Form.Label sm="6">Наименование</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите наименование предприятия" />
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
            <Form.Label sm="6">Номер паспорта</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="passport"
              value={number}
              onChange={handleChange}
              placeholder="Введите номер паспорта (9 цифр)"
              maxLength="9" />
          </Form.Group>
          <Form.Group controlId="formPlaintext5">
            <Form.Label sm="6">Адрес организации</Form.Label>
            <Form.Control
              xs="6"
              type="text"
              name="orgAddress"
              value={orgAddress}
              onChange={(e) => setOrgAddress(e.target.value)}
              placeholder="Введите адрес организации" />
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
                name="ncea"
                id="select-outlined"
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
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <Form.Label sm="6">Зе енд</Form.Label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="inline-end-date"
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
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

export default EntityRegPart;

