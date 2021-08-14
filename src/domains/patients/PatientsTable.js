import React, {useEffect} from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function PatientsTable(props) {

    useEffect(() => {
        console.log(props);
    })

    props.rows.map((row) => (console.log(row)));

    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();

    const headers = [
        {title: '#', data: 'id'},
        {title: 'Имя', data: 'firstName'},
        {title: 'Фамилия', data: 'lastName'},
        {title: 'Отчество', data: 'surName'},
        {title: 'Дата рождения', data: 'dateBirth'},
        {title: 'Адрес регистрации', data: 'adrReg'},
        {title: 'Адрес физический', data: 'adrPhys'},
        {title: 'Телефон', data: 'phone'},
        {title: 'Место работы', data: 'jobPlace'},
        {title: 'Должность', data: 'jobPos'},
    ];

    return (
        <TableContainer component={Paper}>
            <Table size="small"  className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell>{header.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            {headers.map((header) => (
                                <TableCell>{row[header.data]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}