import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllServices = ({ service }) => {
    const { id, name, img } = service;
    return (
        <Col key={service.id}>
            <Card>
                <div className='d-flex justify-content-center'>
                    <Card.Img className='my-coustom d-flex justify-content-center' variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {service.description.slice(0, 100)}
                        <span> ...</span>
                    </Card.Text>
                    <Link to={`/service/${id}`}><button className="btn btn-warning">Details</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllServices;