import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHeader from "@components/tableHeader";
import TableRowCollapsible from "@components/tableRowCollapsible";
import {Box, ListItem, ListItemText} from "@mui/material";
import List from "@mui/material/List";


export default function PatientsTable(props) {
    const headers = [
        {title: '', width: 50},
        {title: 'Имя', data: 'firstName'},
        {title: 'Фамилия', data: 'lastName'},
        {title: 'Отчество', data: 'surName'},
        {title: 'Дата рождения', data: 'dateBirth'},
    ];

    console.log('table render');
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHeader headers={headers}/>
                <TableBody>
                    {props.rows.map((row) =>
                        <TableRowCollapsible key={row.id} row={row} headers={headers}>
                            <Box>
                                <List>
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
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}