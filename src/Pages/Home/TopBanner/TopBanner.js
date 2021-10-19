import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopBannerImg from './img/Doctors-bro.svg';

const TopBanner = () => {
    return (
        <Container className="my-4">
            <Row className="align-items-center">
                <Col sm={12} md={6}>
                    <img src={TopBannerImg} className="img-fluid" alt="" />
                </Col>
                <Col sm={12} md={6}>
                    <div className="ms-3">
                    <Row className="my-bg">
                        <Col sm={8}><h1 className="fw-bold mb-4 text-danger">Health Care - <span className="text-dark fs-3">anytime, anywhere</span></h1></Col>
                        <Col sm={12}><h3 className="fw-bold"><span className="text-danger">F</span>ast Service, <span className="text-danger">S</span>afe Medicine and more - delivered to your home</h3></Col>     
                    </Row>
                    <Link to='/about-us'> <Button className="my-3" variant="dark">Learn more</Button> </Link>
                    </div>
                </Col>    
            </Row>
        </Container>
    );
};

export default TopBanner;