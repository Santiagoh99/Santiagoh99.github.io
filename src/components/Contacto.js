import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Grid, TextField, Stack, Alert, Divider } from '@mui/material'

export default function Contacto() {
    const form = useRef()
    const [showsuccess, setShowsuccess] = useState(false)
    const [dataMensaje, setDataMensaje] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_qqhyz8n', 'template_mrd3a6c', form.current, 'enh2WVNqHqMGN7T-U')
            .then((data) => {
                setDataMensaje('Se envio el mail correctamente')
                setShowsuccess(true)
            }, (err) => {
                setDataMensaje('Hubo un error')
                setShowsuccess(true)
            })

        e.target.reset()
    }

    return (
        <>
            {showsuccess === true ?
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert onClose={() => setShowsuccess(false)}>{dataMensaje}</Alert>
                    <Divider />
                </Stack> : null}
            <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item xs={7}>
                        <TextField size='small' name='Nombre' label='Nombre' required></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField size='small' name='Email' label='Email' type="email" required></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField size='small' name='Telefono' label='Telefono' type="number" required></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField size='small' name='Mensaje' label='Mensaje' required></TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <Button fullWidth type='submit'>Enviar</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}