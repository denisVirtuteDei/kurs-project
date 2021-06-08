import React from "react";
import Grid from '@material-ui/core/Grid'
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import Messages from './Employees/MessageHeader'
import Entity from './EntityPersons';
import Registration from './Employees/Registration';

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
                    <Route path="/im/employees/messages" component={Messages} />
                    <Route path="/im/employees/registration" component={Registration} />
                    <Route path="/im/employees/debtors_info" component={Entity} />
                </Switch>
            </Grid>
        </Grid>
    )
}

export default EmployeeMaket;