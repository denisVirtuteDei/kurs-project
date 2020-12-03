import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import { RegistrationPart } from './Employees/RegistrationPart';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import MessagesContainer from "./HOC/MessagesContainer";
import EntityContainer from './HOC/EntityContainer'

const sidebarUrls = [
    {
        title: 'Messages',
        url: '/employees/messages'
    },
    {
        title: 'Registration',
        url: '/employees/registration'
    },
    {
        title: 'Departure organization',
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
                        <Route exact path="/employees/messages" component={MessagesContainer} />
                        <Route exact path="/employees/registration" component={RegistrationPart} />
                        {/* <Route exact path="/employees/dep_org" component={} /> */}
                        <Route exact path="/employees/debtors_info" component={EntityContainer} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}