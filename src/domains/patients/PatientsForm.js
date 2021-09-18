import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

import { useForm, Controller } from "react-hook-form";
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}))

export default function PatientsForm(props) {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            <Divider/>
            <Button color="primary" type="submit">
                Сохранить
            </Button>
        </form>
    )
}