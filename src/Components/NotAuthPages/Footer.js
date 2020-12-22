import React from 'react';
import { Container } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


const Footer = () => (
    <div style={{
        margin: "auto",
        textAlign: "center",
        flexShrink: 0,
    }}>
        <Typography variant="caption" align={"center"}>
            © Copyright 2021
        </Typography>
        <Divider style={{ margin: "15px auto", width: 60 }} />
        <Grid container justify={"center"} spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography align={"center"} gutterBottom color={"textSecondary"}>
                    About
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography align={"center"} gutterBottom color={"textSecondary"}>
                    Blog
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography align={"center"} gutterBottom color={"textSecondary"}>
                    Terms & Conditions
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography align={"center"} gutterBottom color={"textSecondary"}>
                    Contact us
                </Typography>
            </Grid>
        </Grid>
    </div>
)

export default Footer;