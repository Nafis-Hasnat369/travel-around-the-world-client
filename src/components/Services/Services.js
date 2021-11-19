import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from '@restart/ui/esm/Button';
const Services = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);
    useEffect(_ => {
        setIsLoading(true)
        fetch(`https://pure-eyrie-28741.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false);
            })
    }, []);

    return (
        <Row className="mt-5 mx-5">
            <h1>Welcome to Travel Guru</h1>
            <p>Here are some best places to travel around the world.
                Choose your favorite place here to book your reservation.
            </p>
            {
                isLoading ? <div><Spinner animation="border" variant="dark" />
                    <h5>Loading... please wait </h5>
                </div> :
                    <Row>
                        {
                            services.map(service =>
                                <Col className="p-3" sm={12} md={6} lg={4} key={service._id}>
                                    <img style={{ width: "100%" }} src={service?.img} alt="" />
                                    <h3>{service?.title}</h3>
                                    <p>{service?.description.slice(0, 90)}...</p>
                                    <Link to={`/booking/${service._id}`}><Button className="btn-primary" variant="contained" size="small">Buy now</Button></Link>
                                </Col>
                            )
                        }
                    </Row>
            }

        </Row>
    );
};

export default Services;