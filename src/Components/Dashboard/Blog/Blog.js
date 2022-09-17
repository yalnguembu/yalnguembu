import {  TextField, Paper } from '@mui/material'
import React, { useState } from 'react'

export default function Blog() {
    // const [add, setAdd] = useState(false)
    // const [titre, setTitre] = useState('')
    // const [text, setText] = useState('')
    // const [categorie, setCategorie] = useState('')
    // const [image, setImage] = useState('')
    // const handelAdd = () => {
    //     setAdd(!add);
    //     console.log(text);
    // }
    // const handelTitre = (e) => {

    //     setTitre(e.target.value);
    // }
    // const handelText = (e) => {

    //     setText(e.target.value);
    // }
    // const handelCategorie = (e) => {

    //     setCategorie(e.target.value);
    // }
    // const handelImage = (e) => {

    //     setImage(e.target.value);
    // }
    return (
        <div>
            {/* <Box>
                <TextField
                    fullWidth
                    label='Titre'
                    value={titre}
                    onChange={handelTitre}
                />
                <TextField
                    fullWidth
                    label='Categorie'
                    multiline
                    rows={4}
                    value={categorie}
                    onChange={handelCategorie}
                />
                <TextField
                    fullWidth
                    label='Text'
                    value={text}
                    onChange={handelText}
                />
                <Button
                 color='primary' 
                 fullWidth
                 onSubmit={handelAdd}
                 >Add articles</Button>
            </Box> */}
            <TextField
            label='find'
            fullWidth
            size='small'
            />
            <Paper elevation='2'>
                {
                    (<div>yo</div>)
                }
            </Paper>
        </div>
    )
}
