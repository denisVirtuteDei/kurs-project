import React, { Component } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Grid from '@material-ui/core/Grid'
import { FilingDec } from './FilingDec';
import LeftToolBar from './LeftToolBar'

export const TaxpayersMaket = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    xs12;
                </Grid>
                <Grid item xs={3}>
                    <LeftToolBar />
                </Grid>
                <Grid item xs={9}>
                    <FilingDec />
                </Grid>
            </Grid>
        </Container>
    )
}