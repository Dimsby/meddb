import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableHeader from "@components/tableHeader";
import {IconButton, TableCell, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import DateMoment from "@date-io/moment";

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

export default function CasesTable(props) {
    let dateMoment = new DateMoment()
    const headers = [
        {title: '№', data: 'caseNo'},
        {title: 'Тип ЛН', data: 'caseType'},
        {title: 'ФИО', data: 'patientName'},
        {title: 'Дата начала случая', data: 'dateStart', dateFormat: 'DD-MM-YYYY'},
        {title: 'Дата последней ВК', data: 'dateLast', dateFormat: 'DD-MM-YYYY'},
        {title: 'Диагноз', data: 'diagnosis'},
        {title: 'МКБ-10', data: 'diagnosisCode'},
        {title: ''},
        {title: ''},
    ];

    const renderCells = (row) => {
        return headers.map((header, i) => {
            if (header.data) {
                let cellData = row[header.data]
                if (cellData && header['dateFormat'])
                    cellData = new DateMoment().date(cellData).format(header.dateFormat)
                return <TableCell key={i}>{cellData}</TableCell>
            }
        })

        /*
        return headers.map(function (header, i) {
            if (header.data) {
                let cellData = row[header.data]
                if (header.dateFormat)
                    cellData = dateMoment.date(cellData).format(header.dateFormat)
                return <TableCell key={i}>{cellData}</TableCell>
            }
        }) */
    }

    const countDays = (date) => {
        const date1 = new Date(date);
        const date2 = new Date();
        const diffTime = date2 - date1;

        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const renderRow = (row) => {
        //0-10 зел 11-14 жел 15 ор >15 красная
        let sx;
        const diffDays = row['dateLast'] ? countDays(row['dateLast'] ) : 0
        if (diffDays > 0) {
            if (diffDays > 15)
                sx = { bgcolor: '#ef5350' }
            else if (diffDays > 14)
                sx = { bgcolor: '#e65100' }
            else if (diffDays > 10)
                sx = { bgcolor: '#ff9800' }
        }

        return (
            <TableRow key={'row' + row.id} sx={sx}>
                {renderCells(row)}
                <TableCell key={'edit'} size="small">
                    <IconButton size="small" onClick={() => props.editBtnHandler(row)}>
                        <EditIcon/>
                    </IconButton>
                </TableCell>
                <TableCell key={'delete'} size="small">
                    <IconButton aria-label="expand row" size="small">
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHeader headers={headers}/>
                <TableBody>
                    {props.rows.map((row) => renderRow(row))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}