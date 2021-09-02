import React from "react";
import clsx from 'clsx';

//import { reducer, initialState } from "./reducer";

import {Drawer, Divider, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import useJupiterListItemStyles from '@components/sidebar/style';

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
        },
        drawerPaper: {background: "transparent", border: "none"},
        chevronStyles: {
            root: {
                borderRadius: 20,
                backgroundColor: "white",
                padding: '0.5rem 1rem',
                '&:hover': {
                    backgroundColor: "white"
                },
            }
        }
    }));
    const classes = useStyles();
    const chevronStyles = useJupiterListItemStyles();

    const handleDrawerClick = () => {
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
                    <ListItem onClick={handleDrawerClick} classes={chevronStyles} button component={Link} to={"/"}>
                        <ListItemIcon>
                            {props.sidebarState.open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </ListItemIcon>
                    </ListItem>
                </List>

                {props.children}
            </Drawer>
        </React.Fragment>
    );
}