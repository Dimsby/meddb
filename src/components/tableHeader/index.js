import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";

export default function TableHeader(props) {
    return (
        <TableHead>
            <TableRow>
                {props.headers.map((header, i) => (
                    <TableCell key={i} width={header.width || ''}>{header.title}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}