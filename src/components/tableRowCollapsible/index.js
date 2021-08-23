import {TableRow, TableCell, Collapse, IconButton} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import React from "react";

export default function TableRowCollapsible(props) {

    const [open, setOpen] = React.useState(false);

    const renderRow = () => {
        return props.headers.map(function (header) {
            if (header.data) return <TableCell>{props.row[header.data]}</TableCell>
        })
    }

    return (
        <React.Fragment>
            <TableRow key={props.row.id}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                {renderRow()}
            </TableRow>
            <TableRow>
                <TableCell colSpan={props.headers.length}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {props.children}
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}