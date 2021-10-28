import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(_ => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);
    return (
        <Row className="mt-5 mx-5">
            <h1>Welcome to Travel Guru</h1>
            <p>Here are some best places to travel around the world.
                Choose your favorite place here to book your reservation.
            </p>
            {
                services.map(service =>
                    <Col className="p-3" sm={12} md={6} lg={4} key={service._id}>
                        <img style={{ width: "100%" }} src={service?.img} alt="" />
                        <h3>{service?.title}</h3>
                        <p>{service?.description.slice(0, 150)}...</p>
                        <button className="btn btn-primary">Book now...</button>
                    </Col>
                )
            }
        </Row>
    );
};

export default Services;