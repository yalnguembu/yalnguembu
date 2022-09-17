import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MobileStepper from '@mui/material/MobileStepper'
import Typography from '@mui/material/Typography'
import { Grid, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const slides = [
    {
        user: 'Jean-Marie',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error rerum laborum sapientedolorem aliquam quaerat, voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis.  voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis dolorem ',
        mail: 'lorem@ipsum.com',
        image: 'http://localhost/israShop/images/pexels-cottonbro-5329443.jpg'
    },
    {
        user: 'Luc du con',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error rerum laborum sapiente aliquam quaerat, voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis  voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis',
        mail: 'lorem@ipsum.com',
        image: 'http://localhost/israShop/images/pexels-cottonbro-5329443.jpg'
    },
    {
        user: 'Tamo jean',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error rerum laborum sapiente aliquam quaerat, voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis.  voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis',
        mail: 'lorem@ipsum.com',
        image: 'http://localhost/israShop/images/pexels-cottonbro-5329443.jpg'
    },
    {
        user: 'Jovane Yal',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error rerum laborum sapiente aliquam quaerat, voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis.  voluptates architecto, culpa suscipit id nostrum dolorem perspiciatis',
        mail: 'lorem@ipsum.com',
        image: 'http://localhost/israShop/images/pexels-cottonbro-5329443.jpg'
    },
];

const Slider = () => {
    const [activeSlide, setactiveSlide] = useState(0);
    const maxSize = slides.length;

    const handelNext = () => {
        setactiveSlide((preActiveSlide) => preActiveSlide + 1);
    }

    const handelBack = () => {
        setactiveSlide((preActiveSlide) => preActiveSlide - 1);
    }

    return (
        <Box className='testimonie' id='testimonie'>
            <Grid container columnSpacing={5}>
                <Grid item xs={12} md={6} >
                    <Box className="bx">
                        <Paper
                            // square
                            elevation={4}
                            className='box'
                        >
                            <Box className='imgBox'>
                                <img src={slides[activeSlide].image} alt="" className='img' />
                            </Box>
                            <Typography>{slides[activeSlide].content}</Typography>
                            <hr className="bar" />
                            <Typography className='txt'>{slides[activeSlide].user}</Typography>
                            <Typography className='txt2'>{slides[activeSlide].mail}</Typography>

                        </Paper>
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
                                // disabled={activeSlide === 2}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            }
                        >
                        </MobileStepper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='b1'>
                        <p className="t1">Temoignages</p>
                        <p className="t2">Ce que pensent <br /> mes client stisfait</p>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );

}
export default function Testimonies() {
    return (
        <div>
            <Grid container>
                {/* <Grid item>
                    <Typography>que pensemes client stisfait</Typography>
                </Grid> */}
                <Grid item>
                    <Slider />
                </Grid>
            </Grid>
        </div>
    )
}
