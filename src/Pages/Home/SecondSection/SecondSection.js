import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../../Services/Service/Service';

const SecondSection = () => {
    const [services] = useServices(); //calling custom hook
    //console.log(services);
    return (
        <div className="container">
            <div>
                <h2 className="text-center fw-bold pt-5">Our services</h2>
            </div>
            <Row xs={1} md={3} className="g-4 py-5">
            {
                services.slice(0,6).map(service => <Service key={service.id}
                service={service}></Service>)
            }
            </Row>
            <div className="text-center">
                <Link to='/services'> <Button variant="dark">View More Services</Button> </Link>
            </div>
            
        </div>
    );
};

export default SecondSection;