import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Post = (props) => {
    const {name, img, post, like} = props.post;
    return (
        <Container className="p-5">
        <Row>
            <Col sm={2}>
                <img src={img} alt="" className="img-fluid"/>
            </Col>
            <Col sm={10}>
            <ListGroup>
            <ListGroup.Item action variant="light" className="border-0">
                <h3>{name}</h3>
                <p>{post}</p>
                <p> {like} <span><i class="fas fa-thumbs-up"></i></span> </p>
                </ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
        </Container>
    );
};

export default Post;