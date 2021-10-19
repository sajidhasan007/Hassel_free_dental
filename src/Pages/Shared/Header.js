import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './Hooks/useAuth';


const Header = () => {
    const { user, handlesignout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark" className='mb-3'>
                <Container>
                    <Navbar.Brand href="#home">Hassle Free Treatment</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/destists">Dentists</Nav.Link>
                        <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>

                        <Nav.Link as={HashLink} to="/logout">LogOut</Nav.Link>



                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;