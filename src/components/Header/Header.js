import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = { fontWeight: "bold", color: "red" }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Travel Guru</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        {user?.email &&
                            <><Nav.Link className="text-light" as={NavLink} to="/myBookings">My Bookings</Nav.Link>
                                <Nav.Link className="text-light" as={NavLink} to="/allBookings">Manage All Bookings</Nav.Link>
                                <Nav.Link className="text-light" as={NavLink} to="/addService">Add a New Service</Nav.Link></>}
                        <Navbar.Text>
                            <img className="mx-2" src={user?.photoURL} style={{ width: "40px", borderRadius: "50%" }} alt="" />
                            <small>{user?.displayName}</small>
                        </Navbar.Text>
                        {user?.email ?
                            <Button className="btn btn-warning ms-3" onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-danger" as={NavLink} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;