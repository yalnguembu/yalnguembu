import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
        <div className='Footer' >
            <Grid container>
                <Grid item xs={12} md={6} >
                    <a href='/skill' className='a left'><CopyrightIcon fontSize='small' className='icon' /> YALNGUEMBU 2022 - powerd by YALNGUEMBU</a>
                </Grid>
                <Grid item xs={12} md={6} >
                    <a href='https://m.facebook.com' target="_blank" rel="noreferrer" className='a'><FacebookRoundedIcon fontSize='large' /></a>
                    <a href='https://www.instagram.com' target="_blank" rel="noreferrer" className='a'><InstagramIcon fontSize='large' /></a>
                    <a href='https://www.twitter.com' target="_blank" rel="noreferrer" className='a'><TwitterIcon fontSize='large' /></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noreferrer" className='a'><Telegram fontSize='large' /></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noreferrer" className='a'><LinkedIn fontSize='large' /></a>
                </Grid>
            </Grid>

        </div>
    )
}
