import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = (props) => {
    const { id } = useParams();
    const { user } = useAuth();
    const [places, setPlaces] = useState();
    const [place, setPlace] = useState();
    console.log(place);
    useEffect(_ => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);
    useEffect(_ => {
        const placeDetails = places?.find(place => place?._id === id)
        setPlace(placeDetails);
    }, [id, places]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mt-5 place-order p-5">
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <img src={place?.img} alt="" />
                    <h2>{place?.title}</h2>
                    <p>{place?.description}</p>
                </Col>
                <Col sm={12} md={6} lg={6} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-3 p-2 w-75" value={user.displayName} placeholder="User name" {...register("userName")} /> <br />
                        <input className="mt-3 p-2 w-75" value={user.email} placeholder="user email" {...register("email")} /> <br />
                        <input className="mt-3 p-2 w-75" placeholder="Your address" {...register("address")} /> <br />
                        <input className="mt-3 p-2 w-75" placeholder="Mobile" {...register("mobile")} /> <br />
                        <input className="mt-3 w-75 btn btn-danger" value="Confirm" placeholder="Confirm booking" type="submit" /> <br />
                    </form>
                </Col>

            </Row>
        </div>
    );
};

export default PlaceOrder;