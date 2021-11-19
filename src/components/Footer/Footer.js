import { Grid, List, Typography } from '@mui/material';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system';
const Footer = () => {
    return (
        <Grid mt={10} color="white" backgroundColor="black" container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <RoomIcon sx={{ color: "red" }} />
                <Typography display="inline-block" variant="body2">
                    H#1234/2(2nd Floor), Road #02, <br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} >
                <Typography variant="h5">
                    Company
                    <List sx={{ fontWeight: 300, fontSize: 16 }}>
                        <List align="center" item >About</List>
                        <List align="center" item >Project</List>
                        <List align="center" item >Our Team</List>
                        <List align="center" item >Terms Conditions</List>
                    </List>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} >
                <Typography variant="h5">
                    Quick Links
                    <List sx={{ fontWeight: 300, fontSize: 16 }}>
                        <List align="center" item >Quick Link</List>
                        <List align="center" item >Bookings</List>
                        <List align="center" item >Sales</List>
                        <List align="center" item >Explore</List>
                    </List>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <Typography variant="h5">
                    About Us
                    <Typography mt={2} align="center" variant="body2">
                        We are an independent car selling company <br />
                        Our team trying their best to give you a better service....
                    </Typography>
                    <Box>
                        <FacebookIcon cursor="pointer" sx={{ margin: 2 }} />
                        <InstagramIcon cursor="pointer" sx={{ margin: 2 }} />
                        <LinkedInIcon cursor="pointer" sx={{ margin: 2 }} />
                        <YouTubeIcon cursor="pointer" sx={{ margin: 2 }} />
                    </Box>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;