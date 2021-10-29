import React, {useEffect} from 'react';

import {Grid, Card, CardContent, Button, Box} from "@mui/material";
import CasesTable from "@domains/cases/CasesTable";

import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import ModalCommon from "../../components/modalCommon";
import CasesForm from "../../domains/cases/CasesForm";

export default function CasesPage() {
    const [cases, setCases] = React.useState([]);
    const getCases = (filters = {}) => {
        window.api.invoke("case/findAll", filters, (result) => {
            if (result)
                setCases(result);
        });
    }

    const [activeCase, setActiveCase] = React.useState({});

    useEffect(() => {
        getCases();
    }, [])

    const [modalIsOpen, setModalOpen] = React.useState(false);
    const modalOpenHandler = () => {
        setModalOpen(true);
    }
    const modalCloseHandler = (params) => {
        setModalOpen(false);
    }

    const formSubmitHandler = (data = {}, params = {}) => {
        const action = data.id ? 'case/update' : 'case/add'

        if (data.dateStart)
            data.dateStart = data.dateStart.valueOf();
        if (data.dateFinish)
            data.dateFinish = data.dateFinish.valueOf();
        if (data.dateLast)
            data.dateLast = data.dateLast.valueOf();

        window.api.invoke(action, data, (result) => {
            console.log(result)
            if (result) {
                getCases();
                alert('Сохранено!');
                modalCloseHandler();
            } else {
                alert('Ошибка!')
            }
        })
    }

    const addBtnHandler = () => {
        setActiveCase([])
        modalOpenHandler()
    }

    const editBtnHandler = (data = {}) => {
        if (data)
            setActiveCase(data)
        modalOpenHandler()
    }

    return (
        <div>
            <ModalCommon open={modalIsOpen} modalCloseHandler={modalCloseHandler} width='600px'>
                <CasesForm formSubmitHandler={formSubmitHandler} case={activeCase} />
            </ModalCommon>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <Card>
                        <CardContent>
                            <Box mb={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<PostAddRoundedIcon/>}
                                    onClick={addBtnHandler}
                                >
                                    Добавить
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={10}>
                    <CasesTable rows={cases} editBtnHandler={editBtnHandler} />
                </Grid>
            </Grid>
        </div>
    );


};
