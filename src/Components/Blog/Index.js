import { Box, IconButton } from '@mui/material'
import MobileStepper from '@mui/material/MobileStepper'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react'
import Article from './Articles/Article'


const articles = [
    {
        id: 0, titre: 'Les hook en React js 1', categories: ['Atuces Code'], img: 'http://localhost/israShop/images/1616319502695.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem', date: '12 dec 20 18:45'
    },
    {
        id: 0, titre: 'Les hook en React js 2', categories: ['Javascript'], img: 'http://localhost/israShop/images/1616319502695.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem', date: '12 dec 20 18:45'
    },
    {
        id: 0, titre: 'Les hook en React js 3', categories: ['Atuces Code'], img: 'http://localhost/israShop/images/1616319502695.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem', date: '12 dec 20 18:45'
    },
    {
        id: 0, titre: 'Les hook en React js 4', categories: ['Javascript'], img: 'http://localhost/israShop/images/1616319502695.jpg', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor odio voluptatibus alias necessitatibus ut. Voluptatum, et dolor nulla sapiente omnis qui quidem', date: '12 dec 20 18:45'
    },
]

export default function Index() {
    const [activeSlide, setactiveSlide] = useState(0);
    const maxSize = articles.length;

    const handelNext = () => {
        setactiveSlide((preActiveSlide) => preActiveSlide + 1);
    }

    const handelBack = () => {
        setactiveSlide((preActiveSlide) => preActiveSlide - 1);
    }

    return (
        <Box className='blog' id='blog'>
            <Box className='box_txt'><br />
                <span className='t1'>Blog</span><br/>
                <span className='t2'>Quelques articles recents</span>
            </Box>
            <Article prop={articles[activeSlide]} />
            <MobileStepper
                variant='dots'
                steps={maxSize}
                position='static'
                activeStep={activeSlide}
                className='stepper'
                nextButton={
                    <IconButton
                        className={activeSlide === 0 ? 'btn' : 'btn b_1'}
                        onClick={handelBack}
                        disabled={activeSlide === 0}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                }
                backButton={
                    <IconButton
                        className={activeSlide === 3 ? 'btn' : 'btn b_2'}
                        onClick={handelNext}
                    disabled={activeSlide === 3}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                }
            >
            </MobileStepper>
        </Box >
    )
}
