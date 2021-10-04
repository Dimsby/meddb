import React, {useEffect} from 'react';

import {Grid, Card, CardContent, Button, Box} from "@mui/material";
import CasesTable from "@domains/cases/CasesTable";

import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';

export default function PatientsPage() {
    const [cases, setCases] = React.useState([]);
    const getCase = (filters = {}) => {
        window.api.invoke("case/findAll", filters, (result) => {
            if (result)
                setCases(result);
        });
    }

    useEffect(() => {
        getCase();
    }, [])

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <Card>
                        <CardContent>
                            <Box mb={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<PostAddRoundedIcon/>}
                                >
                                    Добавить
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={10}>
                    <CasesTable rows={cases}/>
                </Grid>
            </Grid>
        </div>
    );


};
