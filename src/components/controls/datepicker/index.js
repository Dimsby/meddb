import React from "react";
import {useFormContext, Controller} from "react-hook-form";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import DatePicker from '@mui/lab/DatePicker';

import 'moment/locale/ru'


import TextField from "@mui/material/TextField";

function FormDatepicker(props) {
    const {control} = useFormContext();

    const {name, label, rules, value: providedValue, required, ...restProps} = props;

    let controllerRules = rules || {};
    if (required) {
        controllerRules.required = 'Обязательно';
    }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={providedValue}
            rules={controllerRules}
            render={({field: {onChange, value}, fieldState: {error}}) => (
                <LocalizationProvider dateAdapter={DateAdapter} locale='ru'>
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={onChange}
                        inputFormat="DD/MM/yyyy"
                        renderInput={(params) => <TextField {...{...params,...restProps, ...{error: !!error, helperText: error ? error.message : null}}} />}
                    />
                </LocalizationProvider>
            )}
        />

    );
}

export default FormDatepicker;