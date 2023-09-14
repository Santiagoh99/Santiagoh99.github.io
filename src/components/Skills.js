import React from 'react'
import { Grid } from '@mui/material'


const images = [
  { url: 'https://img.icons8.com/color/98/000000/microsoft-sql-server.png' },
  { url: 'https://img.icons8.com/color/96/000000/javascript--v1.png' },
  { url: 'https://img.icons8.com/color/98/000000/html-5--v1.png' },
  { url: 'https://img.icons8.com/color/98/000000/css3.png' },
  { url: 'https://img.icons8.com/color/98/000000/nodejs.png' },
  { url: 'https://img.icons8.com/color/98/react-native.png' },
  { url: 'https://img.icons8.com/color/98/typescript.png' },
  { url: 'https://img.icons8.com/color/98/figma.png' },
]
export default function Skills() {
  return (
    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
      {images.map((image) => (
        <Grid item xs='auto' key={image.url}>
          <img src={image.url} alt='logo' />
        </Grid>
      ))}
    </Grid>
  );
}