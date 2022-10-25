import React, { useState } from 'react'
import Proyect from "../components/Proyect"
import Contacto from "../components/Contacto"
import { Grid, Divider,Typography,Button} from '@mui/material'
import logo from '../img/Imagen1.jpg'

export default function Home() {

    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <img width='25%' src={logo} alt='logo' style={{borderRadius: '50%'}}/>
                <Divider style={{ margin: '2em' }}>Sobre mi</Divider>
                <Typography>
                Hola Soy Santiago Herrera. Bienvenidos a mi portafolio, Tengo 23 años. Actualmente me destaco como full stack developer.
                Estudio para Ingeniero en sistemas en la Universidad Abierta Interamerica, a una materia de ser Analista en sistema.
                Dejo para que puedan ver mi CV, sobre mis datos laborales, distintos cursos y aprendizajes a lo largo de mi vida laboral.
                </Typography>
                <Button>
                    Descargar
                </Button>
            </Grid>
            <Divider style={{ margin: '2em' }}>Proyectos</Divider>
            <Proyect />
            <Divider style={{ margin: '2em' }}>Contacto</Divider>
            <Contacto/>
        </>
    )
}