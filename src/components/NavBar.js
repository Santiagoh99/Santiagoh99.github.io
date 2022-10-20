import React, { useState } from 'react'
import { AppBar, Toolbar, Box, BottomNavigation, BottomNavigationAction } from '@mui/material'

export default function Navbar() {
    const [value, setValue] = useState(3)

    return (
        <AppBar position='static'>
            <>
                <Box sx={{ width: '100%' }}>
                    <BottomNavigation showLabels value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                    >
                        <BottomNavigationAction label="Sobre Mi" />
                        <BottomNavigationAction label="Proyectos" />
                        <BottomNavigationAction label="Contacto" />
                    </BottomNavigation>
                </Box>
            </>
        </AppBar>
    )
}