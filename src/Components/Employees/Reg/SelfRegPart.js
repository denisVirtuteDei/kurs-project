import React from "react";
import { Container, Form } from "react-bootstrap";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const SelfRegPart = (props) => {

  const enterClick = () => {
    // const data = {
    //   unp,
    //   shortOrgTitle: title,
    //   firstName: fio.split(' ')[0],
    //   secondName: fio.split(' ')[1],
    //   middleName: fio.split(' ')[2],
    // }
    if (endDate > startDate) {
      const password = props.generatePassword();
      alert(password);
    }
  }

  const [unp, setUnp] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [fio, setFio] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [orgAddress, setOrgAddress] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
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
          <Grid container spacing={2} style={{ margin: "15px" }}>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={5}>
              <Button
                color="primary"
                variant="contained"
                style={{ float: "right", margin: "15px" }}
                onClick={enterClick}
                size="large"
              >
                Registrate
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
  )
}

export default SelfRegPart;

