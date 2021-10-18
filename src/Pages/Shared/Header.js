import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#service">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={HashLink} to="#service">Specialist</Nav.Link>
                        <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Nav.Link as={HashLink} to="/logout">LogOut</Nav.Link>



                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;