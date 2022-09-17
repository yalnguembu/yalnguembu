import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import Contact from '../Contact/Contact'
import Article from './Articles/Article'
import Nav from './Nav/Nav'
import User from './User/User'

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

export default function Blog() {
    return (
        <Box className='main' >
            <Box className='blog' id='blog'>
            <Box className='box_txt'>
                <Typography className='t1'>Blog</Typography>
                <Typography className='t2'>Dernier articles</Typography>
            </Box>
            <Grid container spacing={4} style={{marginTop:100}}>
                <Grid item xs={12} md={8}>
                    {
                        articles.map((article, index) => (
                            <Article key={index} prop={article} />
                        ))
                    }
                </Grid>
                <Grid item xs={12} md={4}>
                    <Nav posts={articles} />
                    <User />
                </Grid>
            </Grid>
            <Contact />
        </Box> 
        </Box>
        
    )
}
