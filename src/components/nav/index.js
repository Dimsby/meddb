import React from "react";
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';


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
                <ListItem button component={Link} to={"/cases"} >
                    <ListItemIcon>
                        <AssignmentRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="ЛН" />
                </ListItem>
            </List>
        </div>
    );
};
export default nav;