import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import Zoom from 'react-reveal/Zoom';
import logo from '../../assets/img/MyLogo.png'
import landingPage from '../../assets/img/newLandingPage.png'
import JohnPauloMoreno_CV from '../../assets/file/John Paulo Moreno CV NEW.pdf'

export const MHome = () => {
    return (
        <Box p={2}>
            <Box>
                <img src={logo} alt="logo" height="30px"/>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={5}>
                <Zoom>
                    <Typography fontSize="16px" fontFamily="poppins" color="#242424" textAlign="center">Hello I'm</Typography>
                    <Typography fontSize="36px" fontWeight={700} fontFamily="poppins" color="#242424" textAlign="center">Paulo Moreno</Typography>
                    <Typography fontFamily="poppins" fontSize="20px"color="#242424" textAlign="center">Front-end Developer</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                        <Button
                            href={JohnPauloMoreno_CV} download="JohnPauloMoreno_CV" target='_blank'
                            sx={{
                                marginTop:'64px',
                                background:'#242424',
                                height:'50px',
                                width:'250px',
                                textTransform:'capitalize',
                                color:'#FFFFFF',
                                fontSize:'14px',
                                borderRadius:'10px',
                                fontFamily:'poppins',
                                '&:hover':{
                                    background:'#242424',
                                }
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Zoom>
                <Box display="flex" justifyContent="center" pt={4} >
                    <Zoom>
                        <img src={landingPage} alt={landingPage} height={300}/>
                    </Zoom>
                </Box>
            </Box>
        </Box>
    )
}
