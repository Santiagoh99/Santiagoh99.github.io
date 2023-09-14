import React from 'react'
import Project from "../components/Project"
import Contacto from "../components/Contacto"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import {  Divider, IconButton } from '@mui/material'
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'

export default function Home() {

    return (
        <>
            <AboutMe />
            <Divider style={{ margin: '2em' }}>Skills</Divider>
            <Skills />
            <Divider style={{ margin: '2em' }}>Projects</Divider>
            <Project />
            <Divider style={{ margin: '2em' }}>Contact</Divider>
            <Contacto />
            <Divider style={{ margin: '1em' }}>
                    <IconButton style={{width:42,height:42}}
                    href="https://wa.me/+541169197081" target='_blank'>
                        <WhatsApp style={{ fontSize: 30}}/>
                    </IconButton>
                    <IconButton style={{ width:42,height:42}}
                    href="https://www.linkedin.com/in/santiago-martin-herrera/" target='_blank'>
                        <LinkedIn style={{ fontSize: 30}}/>
                    </IconButton>
                    <IconButton style={{ width:42,height:42}}
                    href="https://github.com/Santiagoh99" target='_blank'>
                        <GitHub style={{ fontSize: 30}}/>
                    </IconButton>
            </Divider>
        </>
    )
}