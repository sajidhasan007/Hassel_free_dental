import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DentistsData from '../Pages/Shared/Hooks/DentistsData';

const Dentist = () => {
    // const [dentist, setDentist] = useState();
    // console.log(dentist);
    const { dentistId } = useParams();


    const [dentist, setDentist] = useState([]);

    useEffect(() => {

        fetch('/Dentists.json')
            .then(res => res.json())
            .then(data => setDentist(data))

    }, [])


    const selecteddoctor = dentist?.find(element => element.id == dentistId) || {};
    console.log(selecteddoctor);


    return (
        <div className='d-flex justify-content-center'>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={selecteddoctor?.img} />
                    <Card.Body>
                        <Card.Title>{selecteddoctor?.name}</Card.Title>
                        <h6>Available: {selecteddoctor?.Available}</h6>
                        <h6>Specialist: {selecteddoctor?.Specialist}</h6>
                        <h6>Visit Fee: {selecteddoctor.Visit_Fee}</h6>
                        <Card.Text>
                            {selecteddoctor?.description}
                        </Card.Text>

                        <Link to={`/destists`}><button className="btn btn-warning">Go-Back</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Dentist;