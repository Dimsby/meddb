import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";

function FormInput(props) {
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
                <TextField
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...restProps}
                />
            )}
        />
    );
}

export default FormInput;