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
        url: '/im/employees/messages'
    },
    {
        title: 'Registration',
        url: '/im/employees/registration'
    },
    {
        title: 'Departure organization',
        url: '/im/employees/checks'
    },
    {
        title: 'Debtors info',
        url: '/im/employees/debtor_info'
    }
]

const EmployeeMaket = (props) => {
    return (
        <Grid container spacing={2} style={{ width: "100%" }}>
            <Grid className="justify-content-md-left" item xs={2}>
                <LeftToolBar sidebarUrls={sidebarUrls} />
            </Grid>
            <Grid item xs={10}>
                <Switch>
                    <Route path="/im/employees/messages" component={MessagesContainer} />
                    <Route path="/im/employees/registration" component={RegContainer} />
                    <Route path="/im/employees/debtors_info" component={EntityContainer} />
                </Switch>
            </Grid>
        </Grid>
    )
}

export default EmployeeMaket;