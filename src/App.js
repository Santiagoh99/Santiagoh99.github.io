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
import NotFound from "./pages/NotFound"
import Unauthorized from "./pages/Unauthorized"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
          <CssBaseline />
          <Router basename="https://santiagoh99.github.io/Portafolio-V2/">
            <Container>
              <NavBar />
            </Container>
            <Container style={{ padding: "24px" }}>
              <Routes>
                <Route path={"https://santiagoh99.github.io/Portafolio-V2/"} element={<Home />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="*" element={<NotFound />} />
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