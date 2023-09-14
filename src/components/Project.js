import React, { useState } from "react";
import {
  Box,
  Typography,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
} from "./ImageButton";
import { images } from "../data/image";

const styles = {
  imagenstyles: {
    position: "relative",
    p: 4,
    pt: 2,
    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
  },
  titlestyles: {
    backgroundColor: "#393939",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
};

export default function Project() {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState(null);
  const [film, setFilm] = useState(null);

  function video(item) {
    setDesc(item.desc);
    setFilm(item.film);
    setOpen(true);
  }

  return (
    <>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => video(image)}
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${image.url})`,
                filter: "brightness(45%)",
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
        <DialogTitle style={styles.titlestyles}>{desc}</DialogTitle>
        <DialogContent>
          <video controls width="850" height="400">
            <source src={film} type="video/mp4" />
          </video>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="primary"
            fullWidth
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
