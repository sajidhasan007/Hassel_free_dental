import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ServicesData from '../../Shared/Hooks/ServicesData';

const Service = () => {
    // const { services } = ServicesData();
    // console.log(services)
    const { serviceId } = useParams();

    const [service, setService] = useState([]);

    useEffect(() => {

        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    
    const particularservice = service?.find(element => element.id == serviceId) || {};
    console.log(particularservice);
    return (

        <div className='d-flex justify-content-center'>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={particularservice?.img} />
                    <Card.Body>
                        <Card.Title>{particularservice?.name}</Card.Title>
                        <h6>Duration: {particularservice?.diration}</h6>
                        <h6>Treatement Cost: {particularservice.amount}</h6>
                        <Card.Text>
                            {particularservice?.description}
                        </Card.Text>

                        <Link to={`/home`}><button className="btn btn-warning">Go-Back</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;