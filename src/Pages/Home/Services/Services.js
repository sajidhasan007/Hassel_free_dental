import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

                            <Col key={service.id}>
                                <Card>
                                    <div className='d-flex justify-content-center'>
                                        <Card.Img className='my-coustom d-flex justify-content-center' variant="top" src={service.img} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            {service.description.slice(0, 100)}
                                            <span> ...</span>
                                        </Card.Text>
                                        <Link to='/service'><button className="btn btn-warning">Details</button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Services;