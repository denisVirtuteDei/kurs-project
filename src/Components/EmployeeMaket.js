import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import MessagesContainer from "./HOC/MessagesContainer";
import EntityContainer from './HOC/EntityContainer';
import RegContainer from './HOC/RegContainer';

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
        <Grid container spacing={2} style={{width: "100%"}}>
            <Grid className="justify-content-md-left" item xs={2}>
                <LeftToolBar sidebarUrls={sidebarUrls} />
            </Grid>
            <Grid item xs={10}>
                <Switch>
                    <Route exact path="/employees/messages" component={MessagesContainer} />
                    <Route exact path="/employees/registration" component={RegContainer} />
                    <Route exact path="/employees/debtors_info" component={EntityContainer} />
                </Switch>
            </Grid>
        </Grid>
    )
}