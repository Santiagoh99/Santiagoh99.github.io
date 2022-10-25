import React from 'react'
import { Grid,TextField } from '@mui/material'

export default function Contacto() {

    return (
        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="stretch">
                <Grid item xs={12}>
                    <TextField size='small' label='Nombre'></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' label='Email'></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' label='Telefono'></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' multiline maxRows={4} label='Mensaje'></TextField>
                </Grid>
        </Grid>
    )
}