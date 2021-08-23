import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import TableHeader from "@components/tableHeader";
import TableRowCollapsible from "@components/tableRowCollapsible";
import TableHead from "@material-ui/core/TableHead";
import {Box, ListItem, ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";


export default function PatientsTable(props) {
    const headers = [
        {title: '', width: 50},
        {title: 'Имя', data: 'firstName'},
        {title: 'Фамилия', data: 'lastName'},
        {title: 'Отчество', data: 'surName'},
        {title: 'Дата рождения', data: 'dateBirth'},
    ];

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHeader headers={headers}/>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRowCollapsible row={row} headers={headers}>
                            <Box>
                                <List style={flexContainer}>
                                    <ListItem>
                                        <ListItemText secondary="Физический адрес" primary={row.adrPhys}/>
                                        <ListItemText secondary="Адрес регистрации" primary={row.adrReg}/>
                                        <ListItemText secondary="Должность" primary={row.jobPos}/>
                                        <ListItemText secondary="Место работы" primary={row.jobPlace}/>
                                        <ListItemText secondary="Телефон" primary={row.phone}/>
                                    </ListItem>
                                </List>
                            </Box>


                        </TableRowCollapsible>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}