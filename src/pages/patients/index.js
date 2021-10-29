import React, {useEffect} from 'react';

import PatientsTable from "@domains/patients/PatientsTable";
import PatientsTableFilter from "@domains/patients/PatientsTableFilter";
import PatientsForm from "@domains/patients/PatientsForm";

import {Grid, Card, CardContent, Button, Box} from "@mui/material";
import {PersonAddRounded} from "@mui/icons-material";

import ModalCommon from "@components/modalCommon";


export default function PatientsPage() {
    const [patients, setPatients] = React.useState([]);
    const getPatients = (filters = {}) => {
        window.api.invoke("patient/findAll", filters, (result) => {
            if (result)
                setPatients(result);
        });
    }

    useEffect(() => {
        getPatients();
    }, [])

    const [modalIsOpen, setModalOpen] = React.useState(false);
    const modalOpenHandler = () => {
        setModalOpen(true);
    }
    const modalCloseHandler = (params) => {
        setModalOpen(false);
    }

    const formSubmitHandler = (data = {}, params = {}) => {
        if (data.dateBirth)
            data.dateBirth = data.dateBirth.valueOf();

        window.api.invoke("patient/add", data, (result) => {
            if (result) {
                getPatients();
                alert('Сохранено!');
                modalCloseHandler();
            } else {
                alert('Ошибка!')
            }
        })

    }

    return (
        <div>
            <ModalCommon open={modalIsOpen} modalCloseHandler={modalCloseHandler} width='600px'>
                <PatientsForm formSubmitHandler={formSubmitHandler} />
            </ModalCommon>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <Card>
                        <CardContent>
                            <Box mb={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<PersonAddRounded/>}
                                    onClick={modalOpenHandler}
                                >
                                    Добавить
                                </Button>
                            </Box>
                            <PatientsTableFilter/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={10}>
                    {patients.length ? (<PatientsTable rows={patients}/>) : (<p>Нет записей</p>)}
                </Grid>
            </Grid>
        </div>
    );


};
