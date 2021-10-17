import React from "react";
import {useForm, FormProvider} from "react-hook-form";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FormInput from "@components/controls/input";
import FormDatepicker from "@components/controls/datepicker";

export default function PatientsForm(props) {
    const methods = useForm();
    const {handleSubmit} = methods;

    const onSubmit = (data) => {
        return props.formSubmitHandler(data);
    };

    return (
        <FormProvider {...methods}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormInput name="lastName" label="Фамилия" value="" margin="dense" fullWidth required/>
                        <FormInput name="firstName" label="Имя" value="" margin="dense" fullWidth required/>
                        <FormInput name="surName" label="Отчество" value="" margin="dense" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormDatepicker name="dateBirth" label="Дата рождения" value="" margin="dense" fullWidth
                                        required/>
                        <FormInput name="phone" label="Телефон" value="" type='number' margin="dense" fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <FormInput name="adrReg" label="Адрес регистрации" value="" margin="dense" minRows={3}
                                   maxRows={6} multiline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput name="adrPhys" label="Адрес пребывания" value="" margin="dense" minRows={3}
                                   maxRows={6} multiline fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <FormInput name="jobPlace" label="Место работы" value="" margin="dense" minRows={3} maxRows={6}
                                   multiline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput name="jobPos" label="Должность" value="" margin="dense" fullWidth/>
                    </Grid>

                    {/*
                            CREATE TABLE "Patients" (
                            "id"	INTEGER,
                            "lastName"	TEXT NOT NULL,
                            "firstName"	TEXT NOT NULL,
                            "surName"	TEXT,
                            "dateBirth"	INTEGER,
                            "adrReg"	TEXT,
                            "adrPhys"	TEXT,
                            "phone"	INTEGER,
                            "jobPlace"	TEXT,
                            "jobPos"	TEXT,
                            PRIMARY KEY("id" AUTOINCREMENT)
                            ) */}
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