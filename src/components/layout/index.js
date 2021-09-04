import React from "react";
import clsx from 'clsx';

import {CssBaseline, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Nav from '@components/nav';
import Sidebar from '@components/sidebar';

export default function Layout({children}) {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const sidebarState = {
        open: sideBarOpen,
        toggle: () => setSideBarOpen(!sideBarOpen)
    }

    const useStyles = makeStyles((theme) => ({
        content: {
            flexGrow: 1,
            padding: theme.spacing(2),
            paddingLeft: 0,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: theme.myDrawer.widthClosed,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: theme.myDrawer.widthOpen,
        }
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Sidebar sidebarState={sidebarState}>
                <Nav/>
            </Sidebar>
            <main className={clsx(classes.content, {
                [classes.contentShift]: sideBarOpen,
            })}>
                    {children}
            </main>
        </React.Fragment>
    );
}