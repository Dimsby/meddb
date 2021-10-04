import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
//import {makeStyles} from "@mui/styles";
import Paper from "@mui/material/Paper";

import TableHeader from "@components/tableHeader";


export default function TableCommon(props) {

   // const useStyles = makeStyles((theme) => ({}));
   // const classes = useStyles();

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