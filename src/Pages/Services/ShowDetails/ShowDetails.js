import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import './ShowDetails.css';

const ShowDetails = () => {
    let {serviceId} = useParams();  

    const [services] = useServices();

     const foundService = services.find(service=>service.id == serviceId)

    return (
        <Container className="col-lg-6 p-md-5">
            <Row>
                <Col>
                    <Card className="border border-2 p-1">
                        <Card.Img variant="top" src={foundService?.img} />
                        <Card.Body>
                        <Card.Title>{foundService?.title}</Card.Title>
                        <Card.Text>
                            {foundService?.des}
                        </Card.Text>
                        <Card.Text>User rating: <span><Rating initialRating={foundService?.rating} readonly emptySymbol="far fa-star icon" fullSymbol="fas fa-star icon"></Rating></span>
                        </Card.Text>
                        <Card.Text>
                            Service taken: {foundService?.service_taken}
                        </Card.Text>
                        <Row className="text-center">
                            <Col xs={6}><Link to="/services"> <Button variant="dark">Back</Button> </Link></Col>
                            <Col xs={6}><Link to="/get-the-service"><Button variant="danger">Get the Service</Button> </Link></Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ShowDetails;