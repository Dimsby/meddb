import React from "react";
import clsx from 'clsx';

//import { reducer, initialState } from "./reducer";

import {Drawer} from '@mui/material';
//import {makeStyles} from '@mui/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";

/*
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
})); */

export default function Sidebar(props) {

    //const classes = useStyles();

    const drawerWidth = 200;

    const handleDrawerClick = (e) => {
        e.preventDefault();
        props.sidebarState.toggle();
    };

    return (
        <React.Fragment>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                variant="permanent"
                /*classes={{
                    paper: clsx(classes.drawerPaper, {
                        [classes.drawerOpen]: props.sidebarState.open,
                        [classes.drawerClose]: !props.sidebarState.open,
                    }),
                }} */
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