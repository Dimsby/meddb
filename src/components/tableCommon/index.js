import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TableHeader from "@components/tableHeader";


export default function TableCommon(props) {

    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">
                <TableHeader headers={props.headers}/>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            {props.headers.map((header) => (
                                <TableCell>{row[header.data]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}