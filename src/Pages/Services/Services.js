import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices(); //calling custom hook

    return (
        <div className="container">
            <div>
                <h2 className="text-center fw-bold p-3">Our services</h2>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id}
                    service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;