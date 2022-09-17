import React from 'react'

import Service from '../Services/Service'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Projet from '../Projets/Projet'
import Header from '../Header/Header'
import Testimonies from '../Testimonies/Testimonies'
import Contact from '../Contact/Contact'
import Box from '@mui/material/Box'
import '../../Assets/styles/styles.css'
import '../../Assets/styles/Responsive.css'

export default function Home() {
    return (
        <div>
            <Box className='main'>
                <Header />
                <Service />
                <About />
                <Skill />
                <Projet />
                <Testimonies />
                <Contact />
            </Box>
        </div>
    )
}
