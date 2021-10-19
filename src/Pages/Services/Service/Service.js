import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, des, img} = props.service;
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{des.slice(0,120)}...</Card.Text>
            <Row className="">
                <Col xs={6}><Link to={`/service/${id}`}> <Button variant="dark">View Details</Button> </Link></Col>
                <Col xs={6}><Link to="/get-the-service"><Button variant="danger">Get the Service</Button> </Link></Col>
            </Row>
            </Card.Body>  
        </Card>
        </Col>
    );
};

export default Service;