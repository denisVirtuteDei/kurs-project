import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar'
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    float: 'right',
  }
}));

const initialFieldVales = {
  ncea: [],
  fkBankCheck: [],
  taxAmount: 0
}


export const NewDeclarationPart = (props) => {

  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = {};
    if ('ncea' in fieldValues)
      temp.ncea = fieldValues.ncea ? "" : "This field is required";
    if ('fkBankCheck' in fieldValues)
      temp.fkBankCheck = fieldValues.fkBankCheck ? "" : "This field is required";
    if ('taxAmount' in fieldValues)
      temp.taxAmount = fieldValues.taxAmount >= 0 ? "" : "This field is required";

    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "");
  }

  const [errors, setErrors] = useState({});
  const id = window.sessionStorage.getItem('username');

  const [values, setValues] = useState(initialFieldVales);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    const fieldValue = { [name]: value }
    setValues({
      ...values,
      ...fieldValue
    });
    validate(fieldValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      let declaration = {
        fkNcea: values.ncea,
        fkBankCheck: values.fkBankCheck,
        taxAmount: parseInt(values.taxAmount)
      }
      // console.log(declaration);
      props.createDeclaration(declaration, () => {alert('inserted.')})
    }
  }

  useEffect(() => {
    props.fetchAllNceaInfo();
    props.fetchByIdCheckInfo(id);
  }, [])

  return (
    <Container>
      <Toolbar />
      <h1>New declaration</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              {...(errors.ncea && { error: true })}
            >
              <InputLabel id="demo-simple-select-outlined-label">NCEA</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                name="ncea"
                id="demo-simple-select-outlined"
                value={values.ncea}
                onChange={handleChange}
                label="NCEA"
              >
                {
                  props.nceaInfoList.map((el) => {
                    return (
                      <MenuItem value={el.id}>{el.ncea}</MenuItem>
                    )
                  })
                }
              </Select>
              {errors.ncea && (<FormHelperText>{errors.ncea}</FormHelperText>)}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}
              {...(errors.fkBankCheck && { error: true })}>
              <InputLabel id="demo-simple-select-outlined-label">Check ID</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                name="fkBankCheck"
                id="demo-simple-select-outlined"
                value={values.fkBankCheck}
                onChange={handleChange}
                label="Check ID"
              >
                {
                  props.checkInfoList.map((el) => {
                    return (
                      <MenuItem value={el.checkId}>{el.title}</MenuItem>
                    )
                  })
                }
              </Select>
              {errors.fkBankCheck && <FormHelperText>{errors.fkBankCheck}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid className="justify-content-xs" item xs={3} className={classes.formControl}>
            <TextField
              name="taxAmount"
              label="Tax amount"
              type="number"
              variant="outlined"
              value={values.taxAmount}
              onChange={handleChange}
              {...(errors.taxAmount && { error: true, helperText: errors.taxAmount })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button as="input" type="submit" size="large" value="Send" className={classes.button} item xs={2} />
          </Grid>
        </Grid>
      </Form>
    </Container >
  )
}

