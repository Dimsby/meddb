import React from "react";
import clsx from 'clsx';

//import { reducer, initialState } from "./reducer";

import {Drawer, Divider, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/* export const UserContext = React.createContext({
    state: initialState,
    dispatch: () => null
}) */

export default function Sidebar(props) {
    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: theme.myDrawer.widthOpen,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: theme.myDrawer.widthOpen,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.myDrawer.widthClosed,
        }
    }));
    const classes = useStyles();

    const handleDrawerClick = () => {
        props.sidebarState.toggle();
    };

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.sidebarState.open,
                        [classes.drawerClose]: !props.sidebarState.open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClick}>
                        {props.sidebarState.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                {props.children}
            </Drawer>
        </React.Fragment>
    );
}