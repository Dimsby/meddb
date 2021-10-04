import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";

function BaseControl(props) {
    const {control} = useFormContext();

    const {name, label, rules, value: defaultValue} = props;

    let controllerRules = rules || {};
    if (props.required) {
        controllerRules.required = 'Обязательно';
    }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={controllerRules}
            render={({field: {onChange, value}, fieldState: {error}}) => (
                props.children
            )}
        />
    );
}

export default BaseControl;