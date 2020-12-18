import React, { useState, useEffect } from 'react';
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


const MessageHeader = (props) => {

    const date = new Date();

    const rows = (Array.prototype.concat(
        (props.declarationList.map(el => props.createDeclaration(el, props.updateDeclarationCorrectness))),
        (props.checkList.map(el => props.createChecks(el, props.updateCheckCorrectness)))
    ));
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedDate, setSelectedDate] = useState(date.setMonth(date.getMonth() - 1));

    const handleDateChange = (date) => {
        setSelectedDate(date);
        props.update(selectedDate);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

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
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                    <Button color="primary" style={{ margin: "5px" }}
                                        onClick={() => props.update(selectedDate)}
                                    >
                                        Update
                                    </Button>
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <TableCell align="center">------UNP------</TableCell>
                            <TableCell align="center">--------------FIO--------------</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.length <= 0 ? [] :
                                ((rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows)
                                    .map((row, index) => (
                                        <Row key={index} row={row} />
                                    )))
                        }
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

export default MessageHeader;