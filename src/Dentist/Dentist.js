import React, { useState } from 'react';
import { useParams } from 'react-router';
import DentistsData from '../Pages/Shared/Hooks/DentistsData';

const Dentist = () => {
    const [dentist, setDentist] = useState();
    const { dentistId } = useParams();
    const { dentists } = DentistsData();
    //console.log(dentists)
    let found = {};
    return (
        <div>

            <h1>name:</h1>
        </div>
    );
};

export default Dentist;