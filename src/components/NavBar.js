import React, { useState } from 'react'
import { AppBar, Box, BottomNavigation, BottomNavigationAction } from '@mui/material'

export default function Navbar() {
    const [value, setValue] = useState(3)

    return (
        <AppBar position='static'>
            <>
                <Box sx={{ width: '100%' }}>
                    <BottomNavigation showLabels value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                    >
                        <BottomNavigationAction label="About Me" />
                        <BottomNavigationAction label="Project" />
                        <BottomNavigationAction label="Contact" />
                    </BottomNavigation>
                </Box>
            </>
        </AppBar>
    )
}