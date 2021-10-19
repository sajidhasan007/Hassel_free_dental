import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServicesData from '../../Shared/Hooks/ServicesData';

const Service = () => {
    const { services } = ServicesData();
    const { serviceId } = useParams();

    return (

        <div>
            <h1>This is servic {serviceId} </h1>
        </div>
    );
};

export default Service;