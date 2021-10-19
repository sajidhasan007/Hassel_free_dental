import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner4.jpg'
import banner4 from '../../../images/banner/banner5.jpg'

const Banner = () => {
    return (

        <>
            {/* <Container> */}
            <Carousel className='m-3'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* </Container> */}
        </>

    );
};

export default Banner;