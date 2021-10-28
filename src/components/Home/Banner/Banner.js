import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bd2Jwt3/travel-banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Welcome to TRAVEL GURU</h3>
                        <p>We'll give you the best travel suggestions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/v10NSMv/travel-banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark text-start">
                        <h3>Choose favorite places</h3>
                        <p>Our experts our here to serve you the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8MNpjHw/travel-banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark w-25 text-start">
                        <h3>Exquisite travel places for all</h3>
                        <p>Our travel agency will ensure you the best service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;