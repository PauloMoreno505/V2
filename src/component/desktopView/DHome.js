import { Button, Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Zoom from 'react-reveal/Zoom';
import logo from '../../assets/img/MyLogo.png'
import landingPage from '../../assets/img/newLandingPage.png'
import JohnPauloMoreno_CV from '../../assets/file/John Paulo Moreno CV NEW.pdf'

export const Home = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" pb={10} >
            <Container maxWidth="lg">
                <Box pt={3}>
                    <img src={logo} alt="logo" height="45px"/>
                </Box>
                <Grid container pt={12} px={3}>
                    <Grid item lg={6} md={5} sm={12} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                        <Zoom cascade>
                            <Typography fontSize="20px" fontFamily="poppins" color="#242424">Hello I'm</Typography>
                            <Typography fontSize="70px" fontWeight={700} fontFamily="poppins" color="#242424">Paulo Moreno</Typography>
                            <Typography fontFamily="poppins" fontSize="22px"color="#242424">Front-end Developer</Typography>
                            <Button
                                href={JohnPauloMoreno_CV} download="JohnPauloMoreno_CV" target='_blank'
                                sx={{
                                    marginTop:'64px',
                                    background:'#242424',
                                    height:'60px',
                                    width:'250px',
                                    textTransform:'capitalize',
                                    color:'#FFFFFF',
                                    fontSize:'16px',
                                    borderRadius:'10px',
                                    fontFamily:'poppins',
                                    '&:hover':{
                                        background:'#242424',
                                    }
                                }}
                            >
                                Download CV
                            </Button>
                        </Zoom>
                    </Grid>
                    <Grid item lg={6} md={7} sm={12}  >
                        <Zoom>
                            <img src={landingPage} alt={landingPage} width="100%" />
                        </Zoom>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
