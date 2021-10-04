import {TableRow, TableCell, Collapse, IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import React from "react";

export default function TableRowCollapsible(props) {

    const [open, setOpen] = React.useState(false);

    const renderRow = () => {
        return props.headers.map(function (header, i) {
            if (header.data) return <TableCell key={i}>{props.row[header.data]}</TableCell>
        })
    }

    return (
        <React.Fragment>
            <TableRow key={'row' + props.row.id}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                {renderRow()}
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={props.headers.length}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {props.children}
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}