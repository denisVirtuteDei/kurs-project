import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { Toolbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDebtInfoRequest } from '../../Redux/Actions/DebtInfoAction'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const columns = [
  { label: 'Title' },
  { label: 'Debt Sum' },
  { label: 'Debt Billing Date' },
  { label: 'Debt Payed Date' },
  { label: 'isPayed' },
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const DebtInfoPart = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const unp = useSelector(state => state.authorization.username)
  const list = useSelector(state => state.debtInfo.debtList)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(30)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    dispatch(fetchAllDebtInfoRequest(unp))
  }, [])

  return (
    <Container>
      <Toolbar />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <StyledTableRow>
              {columns.map(column => (
                <StyledTableCell align='right'>{column.label}</StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {list.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align='right'>{row.title}</TableCell>
                  <TableCell align='right'>{row.debtSum}</TableCell>
                  <TableCell align='right'>{row.debtBillingDate}</TableCell>
                  <TableCell align='right'>{row.debtPayedDate}</TableCell>
                  <TableCell align='right'>{row.isPayed}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[30]}
        component='div'
        //count={list.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default DebtInfoPart
