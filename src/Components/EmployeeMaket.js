import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import { RegistrationPart } from './Employees/RegistrationPart';
import { NewDeclarationPart } from './Employees/NewDeclarationPart';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import DebtInfoContainer from "./HOC/DebtInfoContainer";
import EntityContainer from './HOC/EntityContainer'

const sidebarUrls = [
    {
        title: 'New declarations',
        url: '/employees/declarations'
    },
    {
        title: 'Registration',
        url: '/employees/registration'
    },
    {
        title: 'New checks',
        url: '/employees/checks'
    },
    {
        title: 'Debtors info',
        url: '/employees/debtor_info'
    }
]

export const EmployeeMaket = () => {
    return (
        <Container fluid="true">
            <Grid container spacing={2}>
                <Grid className="justify-content-md-left" item xs={2}>
                    <LeftToolBar sidebarUrls={sidebarUrls} />
                </Grid>
                <Grid item xs={10}>
                    <Switch>
                        <Route exact path="/employees/registration" component={RegistrationPart} />
                        <Route exact path="/employees/declarations" component={NewDeclarationPart} />
                        <Route exact path="/employees/debtor_info" component={EntityContainer} />
                        {/* 
                        <Route exact path="/employees/debt_info" component={ } /> */}
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}