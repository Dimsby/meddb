import React from "react";
import clsx from 'clsx';

//import { reducer, initialState } from "./reducer";

import {Drawer} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme) => ({
    drawerOpen: {
        width: theme.myDrawer.widthOpen,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.myDrawer.widthClosed
    },
    drawerPaper: {background: "transparent", border: "none", paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2)}
}));

export default function Sidebar(props) {

    const classes = useStyles();

    const handleDrawerClick = (e) => {
        e.preventDefault();
        props.sidebarState.toggle();
    };

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, {
                        [classes.drawerOpen]: props.sidebarState.open,
                        [classes.drawerClose]: !props.sidebarState.open,
                    }),
                }}
            >
                <List>
                    <ListItem onClick={handleDrawerClick} button component={Link} to={"/"}>
                        <ListItemIcon >
                            {props.sidebarState.open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </ListItemIcon>
                    </ListItem>
                </List>

                {props.children}
            </Drawer>
        </React.Fragment>
    );
}