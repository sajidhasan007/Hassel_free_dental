import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DentistsData from '../Shared/Hooks/DentistsData';

const Dentists = () => {
    const { dentists } = DentistsData();
    console.log(dentists);
    return (
        <div>

            <Container>
                <Row xs={1} md={3} className="g-4">
                    {dentists.map(dentist => (
                        <Col key={dentist.id}>
                            <Card>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img className='my-coustom d-flex justify-content-center' variant="top" src={dentist.img} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{dentist.name}</Card.Title>
                                    <Card.Text>
                                        <h6>specialist: {dentist.Specialist}</h6>

                                    </Card.Text>
                                    <Link to={`/dentist/${dentist.id}`}><button className="btn btn-warning">Make an Appointment</button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>




        </div>
    );
};

export default Dentists;