import React, {useEffect} from 'react';

import PatientsTable from "@domains/patients/PatientsTable";
import PatientsTableFilter from "@domains/patients/PatientsTableFilter";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {PersonAddRounded} from "@material-ui/icons";
import Box from "@material-ui/core/Box";


export default function PatientsPage() {
    const [patients, setPatients] = React.useState([]);

    useEffect(() => {
        window.api.invoke("patient/findAll", {}, (result) => {
            if (result)
                setPatients(result);
        });
    }, [])

    const renderTable = () => {
        if (patients.length)
            return (<PatientsTable rows={patients}/>)
        else
            return (<p>Загрузка...</p>)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Box mb={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<PersonAddRounded/>}
                            >
                                Добавить
                            </Button>
                        </Box>
                        <PatientsTableFilter/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={10}>
                {renderTable()}
            </Grid>
        </Grid>
    );


};
