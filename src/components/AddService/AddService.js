import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function AddProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        setSuccess(false);
        fetch(`http://https://pure-eyrie-28741.herokuapp.com/addServices`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setSuccess(true);
                }
            })
    };


    return (
        <Box>
            <Typography color="goldenrod" variant="h3">Please Add a service</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ padding: 20, margin: 10 }} {...register("name")} placeholder="Service Name" /> <br />
                        <input style={{ padding: 20, margin: 10 }}  {...register("img")} placeholder="Please enter your image url" /> <br />
                        <TextField style={{ padding: 5, margin: 5 }} {...register("description")} placeholder="Enter your description here.." /> <br />

                        {errors.exampleRequired && <span>This field is required</span>} <br />

                        <Button variant="contained"><input style={{ color: "#fff", textDecoration: "none", border: "none", backgroundColor: "#1565c0" }} type="submit" /></Button>
                    </form>
                    {success && <Alert severity="success">Service added Successfully!</Alert>}
                </Box>
            </Box>
        </Box>
    );
}