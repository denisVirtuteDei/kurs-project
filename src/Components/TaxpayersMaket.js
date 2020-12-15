import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import NewCheckContainer from './HOC/NewCheckContainer';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import DebtInfoContainer from "./HOC/DebtInfoContainer";
import NewDeclarationContainer from "./HOC/NewDeclarationContainer";

const sidebarUrls = [
    {
        title: 'New declarations',
        url: '/im/taxpayers/declarations'
    },
    {
        title: 'New checks',
        url: '/im/taxpayers/checks'
    },
    {
        title: 'Debt info',
        url: '/im/taxpayers/debt_info'
    }
]


export const TaxpayersMaket = () => {
    return (
        <Container fluid="true">
            <Grid container spacing={2} style={{width: "100%"}}>
                <Grid className="justify-content-md-left" item xs={2}>
                    <LeftToolBar sidebarUrls={sidebarUrls}/>
                </Grid>
                <Grid item xs={10}>
                    <Switch>
                        <Route exact path="/im/taxpayers/declarations" component={NewDeclarationContainer} />
                        <Route exact path="/im/taxpayers/checks" component={NewCheckContainer} />
                        <Route exact path="/im/taxpayers/debt_info" component={DebtInfoContainer} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}