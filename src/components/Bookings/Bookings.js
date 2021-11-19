import { Alert, Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';



const Bookings = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [bookingData, setBookingData] = useState({});
    const [acknowledged, setAcknowledged] = useState(false);
    useEffect(_ => {
        fetch(`http://https://pure-eyrie-28741.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { title, img, description } = product;
    const { user } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData, ...product };
        newBookingData[field] = value;
        setBookingData(newBookingData);
    }
    const handleOnSubmit = e => {
        bookingData.customerName = user?.displayName;
        bookingData.email = user.email;
        bookingData.status = "pending";
        fetch(`http://https://pure-eyrie-28741.herokuapp.com/confirmOrder`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(result => setAcknowledged(result?.acknowledged))
        e.preventDefault();
    };
    return (
        <Container sx={{ marginTop: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt={title}
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            value={user.displayName}
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnChange}
                            type="text"
                            variant="standard" />
                        <TextField
                            value={user.email}
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnChange}
                            type="email"
                            variant="standard" />
                        <TextField
                            required
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            name="address"
                            label="Your Address"
                            onBlur={handleOnChange}
                            type="address"
                            variant="standard" />
                        <TextField
                            required
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            name="mobile"
                            label="Your Mobile No."
                            onBlur={handleOnChange}
                            type="number"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Confirm Order</Button>
                        {acknowledged && <Alert sx={{ marginTop: 5 }} severity="success">Your Order has been placed successfully !</Alert>}
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Bookings;