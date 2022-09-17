import { TextField, Grid , } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import React from 'react'
import img from '../../Assets/Images/contact.png'


export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField
                        label='Nom'
                        size='medium'
                        fullWidth
                        sx={{
                            marginTop: 2
                        }}
                    />
                    <TextField
                        label='email'
                        size='medium'
                        fullWidth
                        sx={{
                            marginTop: 2
                        }}
                    />
                    <TextField
                        label='sujet'
                        size='medium'
                        fullWidth
                        sx={{
                            marginTop: 2
                        }}
                    />
                    <TextField
                        placeholder='message'
                        size='small'
                        fullWidth
                        sx={{
                            marginTop: 2
                        }}
                        multiline
                        rows={5}
                    />
                    <Button size='small' fullWidth className='btn'>Envoyer</Button>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box className='box'>
                        <span className="t1">Contact</span><br />
                        <span className="t2">Laisser nous un commentaire <br /> tous les avis comptent</span>
                    </Box>
                    <img src={img} alt="" className="img" />

                </Grid>
            </Grid>
        </div>
    )
}
