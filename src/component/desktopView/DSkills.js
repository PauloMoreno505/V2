import { Box, Grid, Container } from '@mui/material'
import view from '../../assets/img/viewing.png'
import Zoom from 'react-reveal/Zoom';
import { BorderLinearProgress } from '../../assets/css/css'

const data = [
    { value: 85, label:'React JS' },
    { value: 90, label:'HTML/CSS' },
    { value: 90, label:'Web Development' },
    { value: 75, label:'WordPress' },
    { value: 90, label:'UI / UX Design' },
]

export const DSkills = () => {
    return (
        <Box sx={{background:'#F6F6F6', height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', cursor: 'pointer'}}>
            <Box alignItems="center" fontSize="35px" fontWeight="600" mt="80px" mb="80px">Skills</Box>
            <Container maxWidth="lg">
                <Grid container sx={{marginBottom:'80px'}}>
                    <Grid item lg={6} md={5} sm={12}>
                        <Zoom>
                            <img src={view} alt={view} width="100%" />
                        </Zoom>
                    </Grid>
                    <Grid item lg={6} md={7} sm={12}>
                        {data.map((v, d) => (
                            <Box px={5} key={d}>
                                <Box pt={2}>{v.label}</Box>
                                <Box display="flex" alignItems="center">
                                    <Box width="75%" >
                                        <BorderLinearProgress variant="determinate" value={v.value}/>
                                    </Box>
                                    <Box fontSize="12px">{`${v.value}%`}</Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
