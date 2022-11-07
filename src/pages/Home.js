import React, { useState } from 'react'
import Proyect from "../components/Proyect"
import Contacto from "../components/Contacto"
import { Grid, Divider, Typography, Button, IconButton } from '@mui/material'
import logo from '../img/Imagen1.jpg'
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'

const images = [
    { id: '1', url: 'https://img.icons8.com/color/98/000000/microsoft-sql-server.png' },
    { id: '2', url: 'https://img.icons8.com/color/96/000000/javascript--v1.png' },
    { id: '3', url: 'https://img.icons8.com/color/98/000000/html-5--v1.png' },
    { id: '4', url: 'https://img.icons8.com/color/98/000000/css3.png' },
    { id: '5', url: 'https://img.icons8.com/color/98/000000/nodejs.png' },
    { id: '6', url: 'https://img.icons8.com/color/98/react-native.png' },
    { id: '7', url: 'https://img.icons8.com/fluency/98/000000/visual-studio-2019.png' },
]

export default function Home() {

    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <img width='25%' src={logo} alt='logo' style={{ borderRadius: '50%' }} />
                <Divider style={{ margin: '2em' }}>Sobre mi</Divider>
                <Typography>
                    Hola Soy Santiago Herrera. Bienvenidos a mi portafolio, Tengo 23 años. Actualmente me destaco como full stack developer.
                    Estudio para Ingeniero en sistemas en la Universidad Abierta Interamerica, a una materia de ser Analista en sistema.
                    Dejo para que puedan ver mi CV, sobre mis datos laborales, distintos cursos y aprendizajes a lo largo de mi vida laboral.
                </Typography>
                <Button>
                    Descargar
                </Button>
                <Divider style={{ margin: '1em' }} />
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                    {images.map((image) => (
                        <Grid item xs='auto' key={image.id}>
                            <img src={image.url} alt='logo'/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Divider style={{ margin: '2em' }}>Proyectos</Divider>
            <Proyect />
            <Divider style={{ margin: '2em' }}>Contacto</Divider>
            <Contacto />
            <Divider style={{ margin: '1em' }}>
                    <IconButton style={{width:42,height:42}}
                    href="https://wa.me/+541169197081" target='_blank'>
                        <WhatsApp style={{ fontSize: 30}}/>
                    </IconButton>
                    <IconButton style={{ width:42,height:42}}
                    href="https://www.linkedin.com/in/santiago-martin-herrera/" target='_blank'>
                        <LinkedIn style={{ fontSize: 30}}/>
                    </IconButton>
                    <IconButton style={{ width:42,height:42}}
                    href="https://github.com/Santiagoh99" target='_blank'>
                        <GitHub style={{ fontSize: 30}}/>
                    </IconButton>
                    </Divider>
        </>
    )
}