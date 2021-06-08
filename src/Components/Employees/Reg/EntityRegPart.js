import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { createEntity } from '../../../Redux/Actions/CreatePersonsAction'

const EntityRegPart = props => {
  const dispatch = useDispatch()
  const nceaInfoList = useSelector(state => state.ncea.data)

  const enterClick = () => {
    const username = window.sessionStorage.getItem('username')
    if (username !== '') {
      const password = props.generatePassword()

      const regInfo = {
        username,
        ncea,
        regDate,
      }

      const person = {
        unp,
        shortOrgTitle: title,
        firstName: fio.split(' ')[0],
        secondName: fio.split(' ')[1],
        middleName: fio.split(' ')[2],
        passportNumber: number,
        orgAddress,
        telephone,
      }

      dispatch(createEntity({ person, password }, regInfo))
    }
  }

  const [unp, setUnp] = useState('')
  const [title, setTitle] = useState('')
  const [fio, setFio] = useState('')
  const [number, setNumber] = useState('')
  const [orgAddress, setOrgAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [ncea, setNcea] = useState('')
  const [regDate, setStartDate] = useState(new Date())

  const handleChange = event => {
    const re = /^[0-9\b]+$/
    if (event.target.value === '' || re.test(event.target.value)) {
      if (event.target.name === 'unp') setUnp(event.target.value)
      else if (event.target.name === 'passport') setNumber(event.target.value)
    }
  }

  return (
    <Container>
      <div className='mt-2'>
        <Form>
          <Form.Group controlId='formPlaintext1'>
            <Form.Label sm='6'>УНП</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='unp'
              value={unp}
              onChange={handleChange}
              placeholder='Введите УНП (9 цифр)'
              maxLength='9'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext2'>
            <Form.Label sm='6'>Наименование</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Введите наименование предприятия'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext3'>
            <Form.Label sm='6'>ФИО</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='fio'
              value={fio}
              onChange={e => setFio(e.target.value)}
              placeholder='Введите ФИО'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext4'>
            <Form.Label sm='6'>Номер паспорта</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='passport'
              value={number}
              onChange={handleChange}
              placeholder='Введите номер паспорта (9 цифр)'
              maxLength='9'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext5'>
            <Form.Label sm='6'>Адрес организации</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='orgAddress'
              value={orgAddress}
              onChange={e => setOrgAddress(e.target.value)}
              placeholder='Введите адрес организации'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext6'>
            <Form.Label sm='6'>Телефон</Form.Label>
            <Form.Control
              xs='6'
              type='text'
              name='telephone'
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              placeholder='Введите телефон'
            />
          </Form.Group>
          <Form.Group controlId='formPlaintext7'>
            <Form.Label sm='6'>ОКЭД</Form.Label>
            <div>
              <Select
                labelId='select-outlined-label'
                name='ncea'
                id='select-outlined'
                value={ncea}
                onChange={e => setNcea(e.target.value)}
                label='ОКЭД'
                style={{
                  width: '250px',
                  marginTop: '10px',
                }}
              >
                {nceaInfoList ? (
                  nceaInfoList.map(el => <MenuItem value={el.id}>{el.ncea}</MenuItem>)
                ) : (
                  <MenuItem value='1'>None</MenuItem>
                )}
              </Select>
            </div>
          </Form.Group>

          <hr style={{ marginTop: '20px' }} />

          <Grid container spacing={2} style={{ marginTop: '15px' }}>
            <Grid item xs={3}>
              <Form.Label sm='6'>Дата регистрации</Form.Label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='dd/MM/yyyy'
                  margin='normal'
                  id='inline-start-date'
                  value={regDate}
                  onChange={date => setStartDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              color='primary'
              variant='contained'
              style={{ float: 'right', margin: '15px', marginBottom: '50px' }}
              onClick={enterClick}
              size='large'
            >
              Registrate
            </Button>
          </Grid>
        </Form>
      </div>
    </Container>
  )
}

export default EntityRegPart
