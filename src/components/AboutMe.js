import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import logo from "../img/Imagen1.jpg";

export default function AboutMe() {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography align="center" variant="h5"sx={{ mt: 4 }}>
              Santiago Herrera
            </Typography>
            <Divider style={{ margin: '1em' }} />
            <Typography
              variant="h6"
              color="text.secondary"
              align="center" sx={{ mb: 1.5 }}
            >
               I'm Full stack Developer, 24 years old and from Buenos Aires, Argentina.
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
            >
              I study systems engineering at the Universidad Abierta
              Interamerica. I am a self-taught and highly creative individual
              who seeks to learn and improve every day. I enjoy working with the
              frontend and backend because I want to provide a complete
              experience to the users who visit my projects.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia component="img" sx={{ width: "40%" }} image={logo} />
      </Card>
    </>
  );
}
