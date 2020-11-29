import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import { FilingDec } from './FilingDec';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";

export const TaxpayersMaket = () => {
    return (
        <Container fluid="true">
            <Grid container spacing={3}>
                <Grid className="justify-content-md-left" item xs={3}>
                    <LeftToolBar />
                </Grid>
                <Grid item xs={9}>
                    <Switch>
                        <Route exact path="/taxpayers/registration" component={FilingDec} />
                        <Route exact path="/taxpayers/declarations" component={FilingDec} />
                        <Route exact path="/taxpayers/checks" component={FilingDec} />
                        <Route exact path="/taxpayers/debt_info" component={FilingDec} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}