import React from "react";
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';


const nav = () => {
    return (
        <div>
            <List dense>
                <ListItem button component={Link} to={"/"} >
                    <ListItemIcon>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Главная" />
                </ListItem>
                <ListItem button component={Link} to={"/patients"} >
                    <ListItemIcon>
                        <PeopleAltRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Пациенты" />
                </ListItem>
            </List>
        </div>
    );
};
export default nav;