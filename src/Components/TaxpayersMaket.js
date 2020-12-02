import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import { RegistrationPart } from './Employees/RegistrationPart';
import { NewDeclarationPart } from './Taxpayers/NewDeclarationPart';
import { NewCheckPart } from './Taxpayers/NewCheckPart';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import DebtInfoContainer from "./HOC/DebtInfoContainer";

const sidebarUrls = [
    {
        title: 'New declarations',
        url: '/texpayers/declarations'
    },
    {
        title: 'New checks',
        url: '/texpayers/checks'
    },
    {
        title: 'Debt info',
        url: '/texpayers/debt_info'
    }
]


export const TaxpayersMaket = () => {
    return (
        <Container fluid="true">
            <Grid container spacing={2}>
                <Grid className="justify-content-md-left" item xs={2}>
                    <LeftToolBar sidebarUrls={sidebarUrls}/>
                </Grid>
                <Grid item xs={10}>
                    <Switch>
                        <Route exact path="/taxpayers/declarations" component={NewDeclarationPart} />
                        <Route exact path="/taxpayers/checks" component={NewCheckPart} />
                        <Route exact path="/taxpayers/debt_info" component={DebtInfoContainer} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}