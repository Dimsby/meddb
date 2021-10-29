import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";

function FormAutocomplete(props) {
    const {control} = useFormContext();

    const {name, label, rules, value, required, ...restProps} = props;

    let controllerRules = rules || {};
    if (required) {
        controllerRules.required = 'Обязательно';
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={controllerRules}
            render={({field: {onChange, value}, fieldState: {error}}) => (
                <Autocomplete label={label}
                              onChange={(event, item) => {
                                  onChange(item.id);
                              }}
                              isOptionEqualToValue={(option, value) => {
                                  return option.id === value
                              }}
                              error={!!error} {...restProps} />
            )}
        />
    );
}

export default FormAutocomplete;