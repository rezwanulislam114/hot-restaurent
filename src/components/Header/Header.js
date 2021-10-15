import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo2.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const history = useHistory();
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className="header-logo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/cart">
                                <i className="fas fa-shopping-cart me-3"></i>
                            </Nav.Link>
                            {
                                user?.email ?
                                    <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row">
                                        {user.displayName}
                                        <button onClick={logOut} className="signup-button ms-3">Sign Out</button>
                                    </div> :
                                    <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row">
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <button onClick={() => history.push("/signup")} className="signup-button ms-3">Sign Up</button>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;