import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import esLocale from "date-fns/locale/es"
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles"
import { theme } from "./ui/theme"
import CssBaseline from "@mui/material/CssBaseline"
import "./css/App.css"
import Home from './pages/Home'
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
          <CssBaseline />
          <Router basename="homepage">
            <Container>
              <NavBar />
            </Container>
            <Container style={{ padding: "20px 150px 0px" }}>
              <Routes>
                <Route path={"/"} element={<Home />} />
              </Routes>
            </Container>
            <div className="filler" />
            <Container>
              <Footer />
            </Container>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App