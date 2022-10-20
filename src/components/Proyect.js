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
        <>
            <Grid container spacing={4}>
                {images.map((image) => (
                    <Grid item xs={12} md={4} key={image.url}>
                        <Card sx={styles.root} raised={true}  key={image.url} elevation={3}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={image.url}
                                />
                                <CardContent>
                                    <Typography variant="h5">
                                        {image.title}
                                    </Typography>
                                    <Typography variant="subtitle1" display="block" noWrap>
                                        subtitulo
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2">
                                        desc
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}