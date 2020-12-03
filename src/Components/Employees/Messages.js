import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Toolbar from '@material-ui/core/Toolbar'
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Row from "./MessageDescription";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

function createChecks(id, fkRegPerson, title, finalSum, payedDate, isDebtRepayment, isCorrect, type, data) {
  return {
    id,
    fkRegPerson,
    title,
    finalSum,
    payedDate,
    isDebtRepayment,
    isCorrect,
    type,
    history: [data],
  };
}

const rows = [
  {},
  {}
];

const Messages = (props) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let rowss = [
    props.checkList.map((el) => { })
  ]



  useEffect(() => {
    props.fetchAllBankChecks();
    props.fetchAllDeclaration();
  }, [])

  return (
    <Container>
      <Toolbar />

      <TableContainer component={Paper} style={{ marginTop: "10px" }}>
        <Table aria-label="collapsible table" >
          <TableHead>
            <TableRow >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container style={{marginLeft: "30px"}}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/mm/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <TableCell align="center">------UNP------</TableCell>
              <TableCell align="center">--------------FIO--------------</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {
              (rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <Row key={row.name} row={row} />
              ))
            } */}
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
  );
}

export default Messages;