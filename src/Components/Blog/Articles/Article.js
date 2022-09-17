import React from 'react'
import { Paper, Box } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


export default function Article(props) {
    return (
        <Paper elevation={4} className='article' id='article'>
            <img src={props.prop.img} alt="" className='img' />

            <Box className='txt_Box'>
                <Box className='Box_1'>
                    <Box className='Box'>
                        <p className="txt"><span className="cat_name">{props.prop.categories}</span><span className="date"><CalendarTodayIcon className='cal' fontSize='small' /> {props.prop.date}</span></p>
                    </Box>
                    <Box className='Box'>
                        <p className="txt"><a className="comment" href='/'>{props.prop.comment} Commentaires<span className="toggle">lire les Commentaires</span></a></p>
                    </Box>
                </Box>


                <p className="titre">{props.prop.titre} </p>
                <p className="desc">{props.prop.contenu}... <span className="lien"> lire la suite</span></p>
            </Box>
        </Paper>
    )
}
