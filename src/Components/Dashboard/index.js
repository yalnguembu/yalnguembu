import {
    Grid,
    // Paper,
    // TextField,
    Box
} from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../../Assets/styles/Dashboard.css'
import img from '../../Assets/Images/favicon.png'
import bg from '../../Assets/Images/1616319502695_.jpg'
import me from '../../Assets/Images/moi u.png'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'


const articles = [
    {
        id: 0, titre: 'Les hook en React js', categories: ['Atuces Code', 'Javascript'], img: 'http://localhost/israShop/images/1616319502695.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem', date: '12 dec 20 18:45'
    },
    {
        id: 1, titre: 'Les setter et les getters', categories: ['javascript', 'code', 'trading'], img: 'http://localhost/israShop/images/pexels-max-vakhtbovych-7535074.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem ', date: '23 Fev 21 18:45'
    },
    {
        id: 2, titre: 'Javascript oriente objet', categories: ['javascript', 'code', 'trading'], img: 'http://localhost/israShop/images/pexels-max-vakhtbovych-7535074.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem provident a inventore consequuntur aspernatur nesciunt illum aut.', date: '30 Avr 21 18:45'
    },
]

const messages = [
    {
        id: 0, auteur: 'Ngoka frank', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus', date: '12 dec 20 18:45'
    },
    {
        id: 1, auteur: 'Oyono allan', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus', date: '12 dec 20 18:45'
    },
    {
        id: 2, auteur: 'Nana hanel', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus', date: '12 dec 20 18:45'
    },
]


const Nav = () => {
    return (
        <ul className='nav'>
            <img src={img} alt="" className="img" />
            <li><Link to="/" className="li">Home</Link></li>
            <li> <Link to="services" className="li">Services</Link></li>
            <li> <Link to="about" className="li">A propos</Link></li>
            <li> <Link to="skills" className="li">Competences</Link></li>
            <li> <Link to="projets" className="li">Realisations</Link></li>
            <li> <Link to="blog" className="li">Blog</Link></li>

            <Box className="b1">
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <img src={me} alt="" className="img" />
                    </Grid>
                    <Grid item xs={9}>
                        <p className="name">Yal Nguembu</p>
                        <p className="work">Developpeur crossplateforme</p>
                    </Grid>
                </Grid>
            </Box>
        </ul>
    );
}
const About = () => {
    return (
        <Box className='about'>
            <Box>
                <img src={bg} alt="" className="bg" />
            </Box>
            <Box className='imgBox'>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={4} lg={3}>
                        <Box className='box'>
                            <img src={me} alt="" className='me' />
                        </Box>
                    </Grid>
                    <Grid item xs={8} md={7} lg={8}>
                        <p className="name">Yal Nguembu</p>
                        <p className="work">devellopper web et mobile,UI/UX Designer</p>
                    </Grid>
                    <Grid item xs={1}>
                        <EditIcon className='icon' />
                    </Grid>
                </Grid>
            </Box>
            <Box className="exp">
                <p className="title">Experience</p>
                <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae.!</p>
            </Box>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <p className="title">Aboute me</p>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident nihil, hic veniam deserunt accusantium, expedita deleniti non beatae quos, nostrum quia enim doloremque consectetur voluptatem nesciunt autem ad? Est!</p>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident nihil, hic veniam deserunt accusantium, expedita deleniti non beatae quos, nostrum quia enim doloremque consectetur voluptatem nesciunt autem ad? Est!</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <LocalPhoneIcon className='icon' />
                            <span>696851231</span>
                        </Box>
                        <Box>
                            <MailIcon className='icon' />
                            <span>yalnguembu@gmail.com</span>
                        </Box>
                        <Box>
                            <RoomIcon className='icon' />
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
                <Grid item xs={12} md={2}>
                    <Nav />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Box className='main_app'>
                        <About />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    {/* <Nav /> */}

                    <Box className="it">
                        <p className="titre">Articles recents </p>
                        {
                            articles.map((post, index) => (
                                <Box className='article'>
                                    <Grid container key={index}>
                                        <Grid item xs={3}>
                                            <Box className='imgBox'>
                                                <img src={post.img} alt="" className="img" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Box className='txtBox_'>
                                                <p className="titre_ar">{post.titre}</p>
                                                <CalendarTodayIcon fontSize='small' className='icon' /> <span className="date_">{post.date}</span>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>


                            ))
                        }
                    </Box>
                    <p className="titre">Messages</p>
                    {
                        messages.map((message, index) => (
                            <a href="/" className="it_">
                                <Box className="it" key={index}>
                                    <p className="titre">{message.auteur} </p>
                                    <p className="contenu">{message.contenu} </p>
                                    <p className="date"><CalendarTodayIcon fontSize='small' className='icon' /> {message.date} </p>
                                </Box></a>

                        ))
                    }

                </Grid>
            </Grid>
            <Outlet />

        </Box>
    )
}
