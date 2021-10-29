import React, {useEffect} from "react";
import {useForm, FormProvider} from "react-hook-form";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FormInput from "@components/controls/input";
import FormDatepicker from "@components/controls/datepicker";
import FormAutocomplete from "@components/controls/autocomplete";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CasesForm(props) {
    const methods = useForm();
    const {handleSubmit} = methods;

    const id = props['case'] ? props['case'].id : null
    const isAdd = !id;

    const onSubmit = (data) => {
        return props.formSubmitHandler(data);
    };

    // for autocomplete
    const [patientsAc, setPatientsAc] = React.useState([]);
    const getPatientsAc = (filters = {}) => {
        window.api.invoke("patient/autocomplete", filters, (result) => {
            if (result)
                setPatientsAc(result);
        });
    }

    useEffect(() => {
        getPatientsAc();

        if (!isAdd && props['case']) {
            Object.keys(props['case']).forEach(field => {
                methods.setValue(field, props['case'][field])
            })
        }

    }, [])

    const renderAutocomplete = () => {
        if (!isAdd) {
            return (
                <p>{props['case']['patientName']}</p>
            )
        } else return (
            <FormAutocomplete
                disablePortal
                name="patientId"
                options={patientsAc || []}
                renderInput={(params) => <TextField {...params} fullWidth label="ФИО"/>}
            />
        )
    }

    return (
        <FormProvider {...methods}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormInput name="caseNo" label="№ Л/Н" value="" type='number' margin="dense" required
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput name="caseType" label="Тип Л/Н" value="" margin="dense" required fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                        {renderAutocomplete()}
                    </Grid>

                    <Grid item xs={8}>
                        <FormInput name="diagnosis" label="Диагноз" value="" margin="dense" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput name="diagnosisCode" label="КОД МКБ-10" value="" margin="dense" fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <FormDatepicker name="dateStart" label="Дата начала случая" required margin="dense" fullWidth
                        />
                        <FormDatepicker name="dateLast" label="Дата последней ВК" required margin="dense" fullWidth
                        />
                    </Grid>

                </Grid>

                <Button
                    sx={{marginTop: 2, float: 'right'}}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >
                    Сохранить
                </Button>
            </form>

        </FormProvider>
    );
}