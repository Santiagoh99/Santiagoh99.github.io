import React, { useState } from 'react'
import Proyect from "../components/Proyect"
import { Grid, Divider } from '@mui/material'

export default function Home() {

    return (
        <>
            <Divider style={{ margin: '1em' }}>Proyectos</Divider>
            <Proyect />
        </>
    )
}