import React from 'react'
import {
    Paper,
    Box
} from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Me from '../../../Assets/Images/moi u.png'

export default function User() {
    return (
        <Paper elevation={4} className='user'>
            <p className="name">Yal Nguembu</p>
            <Box className='imgBox'>
                <img src={Me} alt="" className='img' />
            </Box>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora fugiat, sint dolore nesciunt .</p>
            <Box className='iconBox'>
                <a href="/"  className='iconLink'><FacebookRoundedIcon className='icon' fontSize='large'/> </a>
                <a href="/"  className='iconLink'><InstagramIcon className='icon' fontSize='large'/> </a>
                <a href="/"  className='iconLink'><TwitterIcon className='icon' fontSize='large'/> </a>
                <a href="/"  className='iconLink'><WhatsAppIcon className='icon' fontSize='large'/> </a>
            </Box>
        </Paper>
    )
}
