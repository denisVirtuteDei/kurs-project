import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
import dateTemplate from "date-template";

class Messages extends React.Component {

  constructor(props) {
    super(props);
    const date = new Date();
    date.setMonth(date.getMonth() - 1);

    this.state = {
      rows: [],
      page: 0,
      rowsPerPage: 10,
      selectedDate: date
    }

    this.update = this.update.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  createChecks = (el, func) => ({
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
  })

  createDeclaration(el, func) {
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

  componentDidMount() {
    this.update();
  }

  update() {
    this.props.fetchTaxes(this.selectedDate);
    this.props.fetchChecks(this.selectedDate);
    let a = this.props.declarationList.map(el => this.createDeclaration(el, this.props.updateDeclarationCorrectness));
    let b = this.props.checkList.map(el => this.createChecks(el, this.props.updateCheckCorrectness));

    this.setState = {
      ...this.state,
      rows: { ...Array.prototype.concat(a, b) }
    }
    console.log(this.state.rows);
  }

  handleDateChange = (date) => {
    this.setState = {
      ...this.state,
      selectedDate: date
    };
    this.update();
  };

  handleChangePage = (event, newPage) => {
    this.setState = {
      ...this.state,
      page: newPage
    };
  };

  handleChangeRowsPerPage = (event) => {
    this.setState = {
      ...this.state,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    }
  }

  render() {
    return (
      <Container>
        <Toolbar />
        <TableContainer component={Paper} style={{ marginTop: "10px" }}>
          <Table aria-label="collapsible table" >
            <TableHead>
              <TableRow >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container style={{ marginLeft: "30px" }}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      value={this.state.selectedDate}
                      onChange={this.handleDateChange}
                    />
                    <Button color="primary" style={{ margin: "5px" }} onClick={this.update}>Update</Button>
                  </Grid>
                </MuiPickersUtilsProvider>
                <TableCell align="center">------UNP------</TableCell>
                <TableCell align="center">--------------FIO--------------</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (this.state.rowsPerPage > 0
                  ? this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                  : this.state.rows
                ).map((row, index) => (
                  <Row key={index} row={row} toUpdate={this.update} />
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          count={this.state.rows.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Container>
    )
  }
}

export default Messages;