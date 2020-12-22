import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'


  //TODO
  //
  //Init fkRegPerson with Auth
  //



const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(3),
    minWidth: 250,
  },
  button: {
    margin: theme.spacing(2),
    float: 'right',
  }

}));

const initialFieldVales = {
  fkRegPerson: 0,
  title: '',
  finalSum: 0,
  payedDate: '',
  isDebtRepayment: false,
}

export const NewCheckPart = (props) => {

  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = {};
    if ('title' in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required";
    if ('finalSum' in fieldValues)
      temp.finalSum = fieldValues.finalSum ? "" : "This field is required";
    if ('payedDate' in fieldValues)
      temp.payedDate = fieldValues.payedDate ? "" : "This field is required";

    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "");
  }

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(initialFieldVales);
  const handleChange = (event) => {
    const { name, value } = event.target;
    const fieldValue = { [name]: value }
    setValues({
      ...values,
      ...fieldValue,
      isDebtRepayment: event.target.checked
    });
    validate(fieldValue);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      let check = {
        bankCheck: {...values},
        unp: window.sessionStorage.getItem('username')
      }
      props.createCheck(check, () => { alert('inserted.') })
    }
  }

  return (
    <Container>
      <Toolbar />
      <h1>New check</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid className="justify-content-xs" item xs={10} >
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              value={values.title}
              onChange={handleChange}
              className={classes.formControl}
              style={{ width: 530 }}
              {...(errors.title && { error: true, helperText: errors.title })}
            />
          </Grid>
          <Grid className="justify-content-xs" item xs={3} >
            <TextField
              name="finalSum"
              label="Final sum"
              type="number"
              variant="outlined"
              value={values.finalSum}
              onChange={handleChange}
              className={classes.formControl}
              {...(errors.finalSum && { error: true, helperText: errors.finalSum })}
            />
          </Grid>
          <Grid className="justify-content-xs" item xs={3} >
            <TextField
              name="payedDate"
              label="Payed date"
              variant="outlined"
              value={values.payedDate}
              onChange={handleChange}
              className={classes.formControl}

              {...(errors.payedDate && { error: true, helperText: errors.payedDate })}
            />
          </Grid>
          <Grid className="justify-content-xs" item xs={12} >
            <FormControlLabel
              control={
                <Checkbox checked={values.isDebtRepayment} onChange={handleChange} name="isDebtRepayment" />
              }
              className={classes.formControl}
              label="Is debt repayment"
              inputProps={{ 'aria-label': 'primary checkbox' }}
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