import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './Hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, handlesignout } = useAuth();
    console.log(user);

    //console.log('print from header ', user);

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
                        <Nav.Link as={HashLink} to="/technology">Technology</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>

                        {user?.email ?
                            <>
                                <Navbar.Text>
                                    <a href="#login">{user?.name}</a>
                                    <img className='header-image' src={user?.img} alt="" />
                                </Navbar.Text>
                                <button className='btn btn-danger' onClick={handlesignout}>SignOut</button>
                            </>
                            :
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }




                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;