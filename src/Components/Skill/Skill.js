import React from 'react'
import { Grid, IconButton, Tooltip, Typography, Box } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimeLineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimeLineSeparator from '@mui/lab/TimelineSeparator';
import TimeLineDot from '@mui/lab/TimelineDot';
import TimeLineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
const items = [
    { name: 'Photoshop.png', image: require('../../Assets/Images/Photoshop.png') },
    { name: 'Lightroom', image: require('../../Assets/Images/Lightroom.png') },
    { name: 'Adobe XD', image: require('../../Assets/Images/Adobe_XD.png') },
    { name: 'PHP', image: require('../../Assets/Images/PHP.png') },
    { name: 'Node JS', image: require('../../Assets/Images/Node JS.png') },
    { name: 'Java', image: require('../../Assets/Images/Java.png') },
    { name: 'JavaScript', image: require('../../Assets/Images/JavaScript.png') },
    { name: 'React Native', image: require('../../Assets/Images/React Native.png') },
    { name: 'CSS', image: require('../../Assets/Images/CSS.png') },
    { name: 'HTML', image: require('../../Assets/Images/html.png') },
    { name: 'Angular', image: require('../../Assets/Images/Angular.png') },
]
const Nav = () => {
    return (
        <Box className='nav' id='skill'>
            <span className="t1">Skills</span> <br />
            <span className="t2">Skills & Experiences</span>
            {/* <Tooltip title='design' className='tooltip active'>
                <IconButton>
                    <DesignServicesIcon fontSize='small' className='link' />
                </IconButton>
            </Tooltip>
            <Tooltip title='Design graphique' className='tooltip active'>
                <IconButton>
                    <CodeIcon fontSize='small' className='link' />
                </IconButton>
            </Tooltip>
            <Tooltip title='Trading Forex' className='tooltip active'>
                <IconButton>
                    <TimelineIcon fontSize='small' className='link' />
                </IconButton>
            </Tooltip>
            <Tooltip title='Analyse et coception SI' className='tooltip active'> 
                <IconButton>
                    <BarChartIcon fontSize='small' className='link' />
                </IconButton>
            </Tooltip>*/}
        </Box>
    )
}
const Item = ({ name, image }) => {
    return (
        <Grid item xs={4} sm={3} md={4}>
            <Box style={{
                backgroundColor: 'lightgray',
                borderRadius: 200,
                height: 100,
                width: 100,
                paddding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                marginInline: 'auto,'
            }}>
                <img src={image} alt={image} style={{ width: '70%', height: '70%' }} />

            </Box>
            <p style={{
                fontWeight: 'bold',
                fontSize: 19,
                color: 'gray',
                textAlign: 'center'
            }}>{name}</p>
        </Grid>
    )
}
export default function Skill() {
    return (
        <div className='skill'>
            <Nav />
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        {
                            items.map((item, index) => (
                                <Item image={item.image} name={item.name} width={item.image} key={index} />
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <React.Fragment>
                        <Timeline position='alternate'>
                            <TimelineItem>
                                <TimeLineOppositeContent color='text.secondary'>
                                    2019
                                </TimeLineOppositeContent>
                                <TimeLineSeparator>
                                    <TimeLineDot color='primary' />
                                    <TimelineConnector />
                                </TimeLineSeparator>
                                <TimeLineContent>
                                    <Typography variant='h6' >UI/UX Designer Chez YOUNG-Tech</Typography>
                                    <Typography color='text.secondary'>J'ai oocupe le poste de developpeur et ui/ux designer chez young tech</Typography>
                                </TimeLineContent>

                            </TimelineItem>
                            <TimelineItem>
                                <TimeLineOppositeContent color='text.secondary'>
                                    2020
                                </TimeLineOppositeContent>
                                <TimeLineSeparator>
                                    <TimeLineDot  color='success' />
                                    <TimelineConnector />
                                </TimeLineSeparator>
                                <TimeLineContent>
                                    <Typography variant='h6' >Developpeur Web ches DSA</Typography>
                                    <Typography color='text.secondary'>J'ai oocupe le poste de developpeur et ui/ux designer chez young tech</Typography>
                                </TimeLineContent>

                            </TimelineItem><TimelineItem>
                                <TimeLineOppositeContent color='text.secondary'>
                                    2021
                                </TimeLineOppositeContent>
                                <TimeLineSeparator>
                                    <TimeLineDot  color='secondary' />
                                    <TimelineConnector />
                                </TimeLineSeparator>
                                <TimeLineContent>
                                    <Typography variant='h6' >Stage profesionnel en developpement chez CAT</Typography>
                                    <Typography color='text.secondary'>J'ai oocupe le poste de developpeur et ui/ux designer chez young tech</Typography>
                                </TimeLineContent>

                            </TimelineItem>
                        </Timeline>
                    </React.Fragment>
                </Grid>
            </Grid>
        </div >
    )
}
