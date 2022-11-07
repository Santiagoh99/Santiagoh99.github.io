import React, { useState } from 'react'
import { Grid, Typography, DialogContent, Dialog, DialogActions, Button, DialogTitle, Divider } from '@mui/material'
import { ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked } from "../components/imageButton"
import { images } from '../data/image'

const styles = {
    imagenstyles: {
        position: 'relative',
        p: 4,
        pt: 2,
        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
    },
    titlestyles: {
        backgroundColor: '#393939',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
}

export default function Proyect() {

    const [open, setOpen] = useState(false)
    const [desc, setDesc] = useState(null)
    const [film, setFilm] = useState(null)

    function video(item) {
        setDesc(item.desc)
        setFilm(item.film)
        setOpen(true)
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            {images.map((image) => (
                <Grid item xs={3} key={image.title} align="center" sx={{ margin: '5px' }}>
                    <ImageButton focusRipple style={{ width: '75%' }} onClick={() => video(image)}>
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
            ))}
            <Dialog maxWidth='md' open={open} onClose={() => setOpen(false)}>
                <DialogTitle style={styles.titlestyles}>{desc}</DialogTitle>
                <DialogContent>
                    <video controls width="850" height="400">
                        <source src={film} type="video/mp4"/>
                    </video>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} variant='contained' color='primary' fullWidth>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}