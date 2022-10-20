import React, { useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const styles = {
    toolBar: {
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 6,
        paddingRight: 6,
    },
}

export default function Navbar() {
    const navigate = useNavigate()
    const [value, setValue] = useState(3)

    return (
        <AppBar position='static'>
            <Toolbar sx={styles.toolBar}>
                <>
                </>
            </Toolbar>
        </AppBar>
    )
}