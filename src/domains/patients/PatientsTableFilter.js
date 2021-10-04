import React from "react";
import TextField from "@mui/material/TextField";

export default function PatientsTableFilter(props) {

    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Поиск" fullWidth/>
        </form>
    )
}