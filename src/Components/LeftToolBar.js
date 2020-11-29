import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from "react-router-dom";

const sidebarUrls = [
    {
        title: 'Registration',
        url: '/registration'
    },
    {
        title: 'Sent declarations',
        url: '/declarations'
    },
    {
        title: 'Sent checks',
        url: '/checks'
    },
    {
        title: 'Debt info',
        url: '/debt_info'
    }
]

export default function LeftToolBar() {
    return (
        <div style={{ width: 250 }} >
            <Toolbar />
            <List>
                {
                    sidebarUrls.map((el, index) => (
                        <NavLink to={"/taxpayers" + el.url} style={{ textDecoration: "none", color: "black" }}>
                            <ListItem button key={el.title}>
                                <ListItemIcon>{index % 2 === 1 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={el.title} />
                            </ListItem>
                        </NavLink>
                    ))
                }
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 1 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
