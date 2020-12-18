import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useRowStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    buttonItem: {
        margin: theme.spacing(1),
        float: "right",
    },
}));

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             })
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };

export default function Row(props) {
    
    const row = props.row;
    const [open, setOpen] = React.useState(false);
    const [buttonActive, setActive] = React.useState(row.data.isCorrect);
    const classes = useRowStyles();

    const enable = () => {
        let data = {
            ...row.data,
            isCorrect: true
        }
        row.func(data.id, data, ()=>{})
        setActive(true);
    }
    const disable = () => {
        let data = {
            ...row.data,
            isCorrect: false
        }
        row.func(data.id, data, () => {})
        setActive(false);
    }

    // React.useEffect(() => {
        
    // }, [])

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.unp}
                </TableCell>
                <TableCell align="center">{row.fio}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                {row.type}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    {
                                        row.type === 'Check' ?
                                            (
                                                <TableRow key={row.Id}>
                                                    <TableCell component="th" scope="row" align="right">
                                                        Check title
                                                    </TableCell>
                                                    <TableCell align="right">Final sum</TableCell>
                                                    <TableCell align="right">Payed date</TableCell>
                                                    <TableCell align="right">isDebtRepament</TableCell>
                                                    <TableCell align="right" >isCorrect</TableCell>
                                                </TableRow>
                                            ) :
                                            (
                                                <TableRow key={row.Id}>
                                                    <TableCell component="th" scope="row" align="right">
                                                        Check title
                                                    </TableCell>
                                                    <TableCell align="right">NCEA</TableCell>
                                                    <TableCell align="right">Tax amount</TableCell>
                                                    <TableCell align="right">isCorrect</TableCell>
                                                </TableRow>
                                            )
                                    }
                                </TableHead>
                                <TableBody>
                                    {
                                        row.type === 'Check' ?
                                            (
                                                <TableRow key={row.Id} >
                                                    <TableCell component="th" scope="row" align="right">
                                                        {row.data.title}
                                                    </TableCell>
                                                    <TableCell align="right">{row.data.finalSum}</TableCell>
                                                    <TableCell align="right">{row.data.payedDate}</TableCell>
                                                    <TableCell align="right">{row.data.isDebtRep ? 'true' : 'false'}</TableCell>
                                                    <TableCell align="right">{row.data.isCorrect ? 'true' : 'false'}</TableCell>
                                                </TableRow>
                                            ) :
                                            (
                                                <TableRow key={row.Id}>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {row.title}
                                                    </TableCell>
                                                    <TableCell align="right">{row.data.fkNcea}</TableCell>
                                                    <TableCell align="right">{row.data.taxAmount}</TableCell>
                                                    <TableCell align="right">{row.data.isCorrect ? 'true' : 'false'}</TableCell>
                                                </TableRow>
                                            )
                                    }
                                </TableBody>
                            </Table>

                            <Grid container spacing={2} >
                                <Grid item className={classes.buttonItem}>
                                    <Button variant="success" disabled={buttonActive} onClick={enable}>
                                        <CheckIcon />
                                    </Button>
                                </Grid>
                                <Grid item className={classes.buttonItem}>
                                    <Button variant="danger" onClick={disable}>
                                        <CloseIcon />
                                    </Button>
                                </Grid>
                            </Grid>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


