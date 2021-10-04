import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHeader from "@components/tableHeader";
import TableRowCollapsible from "@components/tableRowCollapsible";
import {Box, ListItem, ListItemText} from "@mui/material";
import List from "@mui/material/List";

/*
    caseNo: DataTypes.INTEGER,
    caseType: DataTypes.INTEGER,
    dateStart: DataTypes.DATEONLY,
    dateFinish: DataTypes.DATEONLY,
    dateLast: DataTypes.DATEONLY,
    dateBirth: DataTypes.DATEONLY,
    diagnosis: DataTypes.TEXT,
    diagnosisCode: DataTypes.INTEGER,
    comments: DataTypes.TEXT
 */

export default function PatientsTable(props) {
    const headers = [
        {title: '', width: 50},
        {title: '№', data: 'caseNo'},
        {title: 'Тип ЛН', data: 'caseType'},
        {title: 'Дата начала случая', data: 'dateStart'},
        {title: 'Дата последней ВК', data: 'dateLast'},
        {title: 'Дата окончания ВК', data: 'dateFinish'},
        {title: 'Диагноз', data: 'diagnosis'},
        {title: 'МКБ-10', data: 'diagnosisCode'},
    ];

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHeader headers={headers}/>
                <TableBody>
                    {props.rows.map((row) =>
                        <TableRowCollapsible key={row.id} row={row} headers={headers}>
                            <p>- не готово -</p>
                        </TableRowCollapsible>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}