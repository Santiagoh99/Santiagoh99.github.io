import React, { useState } from 'react'
import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography, Divider, } from '@mui/material'

const styles = {
    root: {
        maxWidth: 345,
    },
}

const images = [
    {
        url: '/static/images/buttons/breakfast.jpg',
        title: 'KOSIUKO',
        subtitle:'E-commerce',
        desc:'E-commerce de la marca Kosiuko para proveedores mayoristas, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: '/static/images/buttons/burgers.jpg',
        title: 'KOSIUKO (TEP)',
        subtitle:'Produccion',
        desc:'Pagina de Produccion de corte de la marca Kosiuko para integrar en Microsoft GP 2018, realizado con react/node , con backend en asp.net core y SQL server',
    },
    {
        url: '/static/images/buttons/camera.jpg',
        title: 'NONSTOP',
        subtitle:'Carga cliente',
        desc:'Pagina de carga de clientes para la productora Nonstop, realizado con react/node , con backend en asp.net core y SQL server',   
    },
    {
        url: '/static/images/buttons/camera.jpg',
        title: 'ALTIORA/IMPLEMENTACION INDUSTRIALES',
        subtitle:'Web',
        desc:'Pagina principal de las consultoras Altiora y Implementaciones Industriales, realizado en HTML-CSS-Javascript',   
    }, 
];

export default function Proyect() {

    return (
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            {images.map((image) => (
                <Grid item xs='auto' key={image.url}>
                    <Card style={styles.root} raised={true} key={image.url} elevation={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={image.url}
                            />
                            <CardContent>
                                <Typography variant="h5" align='center'>
                                    {image.title}
                                </Typography>
                                <Typography variant="subtitle1" display="block" noWrap align='center'>
                                    {image.subtitle}
                                </Typography>
                                <Divider />
                                <Typography variant="body2" align='center'>
                                {image.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}