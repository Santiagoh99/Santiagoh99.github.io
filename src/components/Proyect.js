import React, { useState } from 'react'
import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography, Divider, } from '@mui/material'


const styles = {
    root: {
        maxWidth: 345,
    },
}

export default function Proyect() {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Card sx={styles.root} raised={true} elevation={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                //image={src}
                                title={'product.name'}
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    product.id
                                </Typography>
                                <Typography variant="subtitle1" display="block" noWrap>
                                    product.name
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    product.category
                                </Typography>
                                <Typography>
                                    <strong>(product.price * (1 - (product.discount / 100))).toFixed(2)</strong>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}