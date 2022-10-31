import React from 'react'
import { Button, Grid, TextField } from '@mui/material'

export default function Contacto() {

    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
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
            <Grid item xs={12}>
                <Button fullWidth>Enviar</Button>
            </Grid>
        </Grid>
    )
}