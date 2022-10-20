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
        title: 'Breakfast',
    },
    {
        url: '/static/images/buttons/burgers.jpg',
        title: 'Burgers',
    },
    {
        url: '/static/images/buttons/camera.jpg',
        title: 'Camera',
    },
];

export default function Proyect() {

    return (
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            {images.map((image) => (
                <Grid item xs={4} key={image.url}>
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
                                    subtitulo
                                </Typography>
                                <Divider />
                                <Typography variant="body2" align='center'>
                                    desc
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}