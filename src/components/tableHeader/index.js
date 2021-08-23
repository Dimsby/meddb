import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";

export default function TableHeader(props) {
    return (
        <TableHead>
            <TableRow>
                {props.headers.map((header) => (
                    <TableCell width={header.width || ''}>{header.title}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}