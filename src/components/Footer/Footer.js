import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-2">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="footer-logo" src={logo} alt="" />
                    </Col>
                    <Col md={3} className="footer-quick-link">
                        <Link to="/home">About Hot Onion</Link>
                        <Link to="/home">Read Blogs</Link>
                        <Link to="/home">Sign Up To Deliver</Link>
                        <Link to="/home">Rate Us</Link>
                    </Col>
                    <Col md={3} className="footer-quick-link">
                        <Link to="/home">Get Help</Link>
                        <Link to="/home">Read FAQs</Link>
                        <Link to="/home">View All Cities</Link>
                        <Link to="/home">Restaurent Near Me</Link>
                    </Col>
                </Row>
                <Row className="mt-4 flex-column-reverse flex-lg-row">
                    <Col md={7} className="">
                        <p>Copyright @ 2021 Online Food</p>
                    </Col>
                    <Col md={5} className="footer-terms">
                        <Link to="/home">Privacy Policy</Link>
                        <Link to="/home">Terms Of Use</Link>
                        <Link to="/home">Pricing</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;