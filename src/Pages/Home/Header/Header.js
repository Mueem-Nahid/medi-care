import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderImg from './img/header-img.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/home">
                <img
                src={HeaderImg}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Navbar.Brand as={Link} to="/home" className="fw-bolder"><span className="text-danger fw-bolder">Medi</span> Care</Navbar.Brand>
                </Nav>
                <Nav>
                <Nav.Link  as={NavLink} to="/home" className="fw-bolder">Home</Nav.Link>
                <Nav.Link  as={NavLink} to="/services" className="fw-bolder">
                    Services
                </Nav.Link>
                <Nav.Link  as={NavLink} to="/posts" className="fw-bolder">
                    Posts
                </Nav.Link>
                <Nav.Link  as={NavLink} to="/about-us" className="fw-bolder">
                    About Us
                </Nav.Link>
                {/* <Nav.Link  as={NavLink} to="/login" className="fw-bolder">
                    Login
                </Nav.Link> */}
                {
                    user.email ? <Nav.Link to="/user" as={NavLink} className="fw-bolder">{user.displayName ? user.displayName : user.email}</Nav.Link> : ""
                }
                {
                    user.email ?
                    <Nav.Link to="/home" onClick={logOut} className="fw-bolder">Logout</Nav.Link> :
                    <Nav.Link to="/login" as={NavLink} className="fw-bolder">Login</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;