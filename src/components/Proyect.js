import React, { useState } from 'react'
import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography, Divider, DialogContent, Dialog, Toolbar, DialogActions, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const styles = {
    root: {
        maxWidth: 345,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 1,
        color: 'inherit',
    },
}

const images = [
    {
        url: require('../img/kosiuko.png'),
        title: 'KOSIUKO',
        desc: 'E-commerce de la marca Kosiuko para proveedores mayoristas, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: require('../img/kosiuko.png'),
        title: 'KOSIUKO (TEP)',
        desc: 'Desarrollo de Produccion de corte de la marca Kosiuko para integrar en Microsoft GP 2018, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: require('../img/kosiuko.png'),
        title: 'NONSTOP',
        desc: 'Desarrollo de carga de clientes para la productora Nonstop, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: require('../img/kosiuko.png'),
        title: 'ALTIORA/IMPLEMENTACION INDUSTRIALES',
        desc: 'Pagina principal de las consultoras Altiora y Implementaciones Industriales, realizado en HTML-CSS-Javascript',
    },
    {
        url: require('../img/kosiuko.png'),
        title: 'FARMAGRAM',
        desc: 'Desarrollo de Produccion de fallas de la empresa FarmaGram para integrar en Microsoft GP 2016, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: require('../img/kosiuko.png'),
        title: 'FARMAGRAM(Facturacion)',
        desc: 'Desarrollo de produccion para la facturacion de la empresa FarmaGram para integrar en Microsoft GP 2016, realizado con react/node , con backend en asp.net core y SQL server',
    },
];

export default function Proyect() {

    const [open, setOpen] = useState(false);

    return (
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            {images.map((image) => (
                <>
                    <Grid item xs='auto' key={image.url}>
                    <Card style={styles.root} raised={true} key={image.url} elevation={3}>
                            <CardActionArea onClick={() => setOpen(true)}>
                                <CardMedia component="img" image={image.url} height="200"/>
                                <CardContent>
                                    <Typography variant="h5" align='center'>{image.title}</Typography>
                                    <Divider />
                                    <Typography variant="body2" align='center'>{image.desc}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Dialog maxWidth='md' open={open} onClose={() => setOpen(false)}>
                        <Toolbar variant='dense' >
                            <IconButton style={styles.closeButton} onClick={() => setOpen(false)} size='large'>
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <DialogContent>
                            <video width="750" height="500" controls >
                                <source src={image.video} type="video/mp4" />
                            </video>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)} variant='contained' color='primary' disableElevation fullWidth>
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            ))}
        </Grid>
    )
}