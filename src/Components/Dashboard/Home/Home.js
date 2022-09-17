import { Grid, Paper, TextField } from '@mui/material'
import { grid } from '@mui/system'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';

const Nav = () => {
    return (
        <Paper elevation={2} square className='nav'>
            <img src="" alt="" className="img" />
            <a href="/" className="link">Home</a>
            <a href="/" className="link">Services</a>
            <a href="/" className="link">A propos</a>
            <a href="/" className="link">Competences</a>
            <a href="/" className="link">Realisations</a>
            <a href="/" className="link">Blog</a>
        </Paper>
    );
}
const About = () => {
    return (
        <Box className='about'>
            <Box>

            </Box>
            <Box>

            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <p className="title">Aboute me</p>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident nihil, hic veniam deserunt accusantium, expedita deleniti non beatae quos, nostrum quia enim doloremque consectetur voluptatem nesciunt autem ad? Est!</p>
                        {/* <a href="/" className="link"></a> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <LocalPhoneIcon className='icon' /> Telephone
                            <span>696851231</span>
                        </Box>
                        <Box>
                            <MailIcon className='icon' /> Adresse mail
                            <span>yalnguembu@gmail.com</span>
                        </Box>
                        <Box>
                            <RoomIcon className='icon' /> Localisation
                            <span>Douala, Cameroun</span>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default function Home() {
    return (
        <Box className='Home_app'>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Nav />
                </Grid>
                <Grid item xs={12} md={9}>
                    <About />
                    <Grid container>
                        <Grid item x={12} md={4}>
                            <Box className="it">
                                <RoomIcon className='icon2' />
                                <p className="title">Pojets</p>
                                <p className="nbre"></p>
                            </Box>
                        </Grid>
                        <Grid item x={12} md={4}>
                            <Box className="it">
                                <RoomIcon className='icon2' />
                                <p className="title">Pojets</p>
                                <p className="nbre"></p>
                            </Box>
                        </Grid>
                        <Grid item x={12} md={4}>
                            <Box className="it">
                                <RoomIcon className='icon2' />
                                <p className="title">Pojets</p>
                                <p className="nbre"></p>
                            </Box>
                        </Grid>
                        <Grid item x={12} md={4}>
                            <Box className="it">
                                <RoomIcon className='icon2' />
                                <p className="title">Pojets</p>
                                <p className="nbre"></p>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}
