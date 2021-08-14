import React, {useEffect} from 'react';

import PatientsTable from "@domains/patients/PatientsTable";

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
            return (<p>Loading...</p>)
    }

    return (
        <div>
            {renderTable()}
        </div>
    );


};
