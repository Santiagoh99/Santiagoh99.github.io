import React, { useState } from 'react'
import Proyect from "../components/Proyect"
import { Grid, Divider } from '@mui/material'
import logo from '../img/Imagen1.jpg'

export default function Home() {

    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <img width='15%' src={logo} alt='logo' />
            </Grid>
            <Divider style={{ margin: '2em' }}>Proyectos</Divider>
            <Proyect />
        </>
    )
}