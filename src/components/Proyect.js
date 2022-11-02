import React, { useState } from 'react'
import { Grid, Typography, DialogContent, Dialog, DialogActions, Button } from '@mui/material'
import { ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked } from "../components/imageButton"
import { images } from '../data/image'

const styles = {
    imagenstyles: {
        position: 'relative',
        p: 4,
        pt: 2,
        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
    },
}

export default function Proyect() {

    const [open, setOpen] = useState(false);

    return (
        <Grid container justifyContent="center" alignItems="center">
            {images.map((image) => (
                <>
                    <Grid item xs={4} key={image.title} align="center">
                        <ImageButton focusRipple key={image.tile} style={{ width: '50%' }}>
                            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography component="span" variant="subtitle1" color="inherit" sx={styles.imagenstyles}>
                                    {image.title}
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                        </ImageButton>
                    </Grid>
                    <Dialog maxWidth='md' open={open} onClose={() => setOpen(false)}>
                        <DialogContent>
                            <video width="450" height="400" controls >
                                <source src={image.video} type="video/mp4" />
                            </video>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)} variant='contained' color='primary' fullWidth>
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            ))}
        </Grid>
    )
}