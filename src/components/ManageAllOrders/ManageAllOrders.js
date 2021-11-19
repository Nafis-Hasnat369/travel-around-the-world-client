import { Button, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { Fragment, useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import useAuth from '../../Hooks/useAuth';
const ManageAllOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [deletedCount, setDeletedCount] = useState(false);
    const [status, setStatus] = useState(false);
    useEffect(_ => {
        fetch(`http://https://pure-eyrie-28741.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [user?.email, deletedCount, status]);

    const handleDelete = id => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this order");
        if (result) {
            fetch(`http://https://pure-eyrie-28741.herokuapp.com/cancelOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeletedCount(!deletedCount);
                    }
                });
        }
    };
    const handleUpdate = id => {
        const updatedStatus = "approved";
        fetch(`http://https://pure-eyrie-28741.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ updatedStatus })
        })
            .then(res => res.json())
            .then(result => {
                setStatus(!status)
            });
    };
    return (
        <div>
            <h2>All Orders: {myOrders?.length}</h2>
            <Grid container spacing={2}>
                {
                    myOrders?.map(pd => <Fragment key={pd._id} >
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={pd?.name}
                                    image={pd?.img} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pd?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Price: $ {pd?.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={9}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ordered By</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Address</TableCell>
                                            <TableCell align="center">Mobile no</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Update Order</TableCell>
                                            <TableCell align="center">Cancel Order</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row"> {pd?.customerName}</TableCell>
                                            <TableCell align="center">{pd?.email}</TableCell>
                                            <TableCell align="center">{pd?.address}</TableCell>
                                            <TableCell align="center">{pd?.mobile}</TableCell>
                                            <TableCell align="center">{pd?.status}</TableCell>
                                            <TableCell align="center"><Button onClick={_ => handleUpdate(pd?._id)} variant="contained">Update</Button></TableCell>
                                            <TableCell align="center"><ClearIcon cursor="pointer" onClick={_ => handleDelete(pd?._id)} /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid></Fragment>
                    )
                }
            </Grid>
        </div>
    );
};

export default ManageAllOrders;