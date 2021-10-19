import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Post = (props) => {
    const {name, img, post, like} = props.post;
    return (
        <Container className="p-5">
        <Row>
            <Col sm={2}>
                <img src={img} alt="" className="img-fluid"/>
            </Col>
            <Col sm={10}>
                <h3>{name}</h3>
                <p>{post}</p>
                <p> {like} <span><i class="fas fa-thumbs-up"></i></span> </p>
            </Col>
        </Row>
        </Container>
    );
};

export default Post;