import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllServices from '../../AllSearvices.js/AllServices';
import ServicesData from '../../Shared/Hooks/ServicesData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = ServicesData();
    return (
        <div className='services'>
            <div className='m-3 bg-primary text-white'>
                <h1>Our Services</h1>
            </div>
            <div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {services.map(service => (
                            <AllServices
                                key={service.id}
                                service={service}
                            ></AllServices>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Services;