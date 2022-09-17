import { Paper, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import Device from '@mui/icons-material/Devices';
import Edit from '@mui/icons-material/Edit';
import CodeIcon from '@mui/icons-material/Code';


export default function Service() {

    return (
        <Box className='services' id='services'>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <Box className='box_txt'>
                        <Typography className='t1'>Services</Typography>
                        <Typography className='t2'>En quoi puis-je aider?</Typography>
                    </Box>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, fuga? Quia nisi doloremque totam tempore! Voluptatum iusto dolorum sunt ratione! Commodi sit nobis sunt laborum neque quisquam, nam repudiandae iure.</p>
                    <Grid container>
                        <Grid item xs={6}>
                            <h1 className='m-0'>215+</h1>
                            <p className='m-0'>Projets realisés</p>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='m-0'>87+</h1>
                            <p className='m-0'>clients satisfait</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box className='box'>
                            <Box className='box_2 g'>
                                <Edit className='icon' fontSize='medium' />
                            </Box>
                            <Box className='box_3'>
                                <Typography className='txt'>Logo et Branding</Typography>
                                <Typography className='txt2'>25 projets</Typography>
                            </Box>
                        </Box>
                        <Box className='box'>
                            <Box className='box_2 y'>
                                <Device className='icon' fontSize='medium' />
                            </Box>
                            <Box className='box_3'>
                                <Typography className='txt'>UI/UX Design</Typography>
                                <Typography className='txt2'>13 projets</Typography>
                            </Box>
                        </Box>
                        <Box className='box'>
                            <Box className='box_2 r'>
                                <CodeIcon className='icon' fontSize='medium' />
                            </Box>
                            <Box className='box_3'>
                                <Typography className='txt'>Developpement d'Application</Typography>
                                <Typography className='txt2'>12 projets</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
