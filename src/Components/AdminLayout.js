import React from "react";
import Grid from '@material-ui/core/Grid'
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";
import ImportantInfo from './AdminTopSecret/ImportantInfo';

const sidebarUrls = [
    {
        title: 'Add employees',
        url: '/im/admin/new_employees'
    },
    {
        title: 'Memes gato',
        url: '/im/admin/important_info'
    },
    {
        title: 'Memes basura',
        url: '/im/admin/trash'
    },
    {
        title: 'Memes de gachi',
        url: '/im/admin/something_interesting'
    }
]

const AdminMaket = (props) => {
    return (
        <Grid container spacing={2} style={{ width: "100%" }}>
            <Grid className="justify-content-md-left" item xs={2}>
                <LeftToolBar sidebarUrls={sidebarUrls} />
            </Grid>
            <Grid item xs={10}>
                <Switch>
                    <Route path="/im/admin/new_employees" component={() => (<div/>)} />
                    <Route path="/im/admin/important_info" component={ImportantInfo} />
                    <Route path="/im/admin/trash" component={() => (<div/>)} />
                    <Route path="/im/admin/something_interesting" component={() => (<div/>)} />
                </Switch>
            </Grid>
        </Grid>
    )
}

export default AdminMaket;