import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import Toolbar from '@material-ui/core/Toolbar'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Row from './MessageDescription'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { fetchTaxes, updateDeclarationCorrectness } from '../../Redux/Actions/DeclarationAction'
import { fetchChecks, updateBankCheckCorrectness } from '../../Redux/Actions/BankCheckInfoAction'
import { useDispatch, useSelector } from 'react-redux'

const createChecks = (el, func) => {
  return {
    unp: el.unp,
    fio: el.fName + el.mName + el.sName,
    type: 'Check',
    func: func,
    data: {
      id: el.checkId,
      fkRegPerson: el.fkRegPerson,
      title: el.checkTitle,
      finalSum: el.finalSum,
      payedDate: el.payedDate,
      isDebtRep: el.isDebtRep,
      isCorrect: el.isCorrect,
    },
  }
}

const createDeclaration = (el, func) => {
  return {
    unp: el.unp,
    fio: el.fName + el.mName + el.sName,
    title: el.checkTitle,
    type: 'Declaration',
    func: func,
    data: {
      id: el.taxesId,
      fkNcea: el.fkNcea,
      fkBankCheck: el.fkBankCheck,
      taxAmount: el.taxAmount,
      isCorrect: el.isCorrect,
    },
  }
}

const Messages = props => {
  const initDate = new Date()
  
  const dispatch = useDispatch()
  const checkList = useSelector(state => state.checkInfo.backChecks)
  const declarationList = useSelector(state => state.declarations.payedTaxes)

  const rows = Array.prototype.concat(
    declarationList.map(el => createDeclaration(el, updateDeclarationCorrectness)),
    checkList.map(el => createChecks(el, updateBankCheckCorrectness))
  )
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selectedDate, setSelectedDate] = useState(initDate.setMonth(initDate.getMonth() - 1))

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    dispatch(fetchTaxes(selectedDate))
    dispatch(fetchChecks(selectedDate))
  }, [selectedDate])

  return (
    <Container>
      <Toolbar />
      <TableContainer component={Paper} style={{ marginTop: '10px' }}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container style={{ marginLeft: '30px' }}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='dd/MM/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                  <Button
                    color='primary'
                    style={{ margin: '5px' }}
                    onClick={() => props.update(selectedDate)}
                  >
                    Update
                  </Button>
                </Grid>
              </MuiPickersUtilsProvider>
              <TableCell align='center'>------UNP------</TableCell>
              <TableCell align='center'>--------------FIO--------------</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length <= 0
              ? []
              : (rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row, index) => <Row key={index} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default Messages
