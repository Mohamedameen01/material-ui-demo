import { Container, Grid } from '@mui/material'
import React from 'react'
import { FeaturePost, Footer, MainBlog, MainPost, Navbar, SideBar } from '../components'

function Home() {
  return (
    <Container>
        <Navbar />
        <FeaturePost />
        <MainPost />
        <Grid container spacing={5} sx={{mt:3}}>
            <MainBlog />
            <SideBar />
        </Grid>
        <Footer />
    </Container>
  )
}

export default Home