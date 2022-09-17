import React from 'react'
import {
    Grid,
    Paper,
    Box
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Nav({ posts }) {
    return (
        <Paper elevation={4} className='nav'>
            <p className="h1">Posts les plus populaires</p>
            {
                posts.map((post, index) => (
                    <Grid container key={index}>
                        <Grid item xs={3}>
                            <Box className='imgBox'>
                                <img src={post.img} alt="" className="img" />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='txtBox'>
                                <p className="titre">{post.titre}</p>
                                <span className="date"><CalendarTodayIcon fontSize='small' className='icon' /> {post.date}</span>
                            </Box>
                        </Grid>
                    </Grid>

                ))
            }
        </Paper>
    )
}
