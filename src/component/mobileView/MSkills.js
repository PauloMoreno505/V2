import { Box, useMediaQuery } from '@mui/material'
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
export const MSkills = () => {
    const smallview = useMediaQuery('(min-width: 600px) and (max-width:899px)');
    return (
        <Box sx={{background:'#F6F6F6', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', cursor: 'pointer'}} p={2}>
            <Box fontSize="24px" py={4} fontWeight="700" color="#242424">Skills</Box>
            <Box display={smallview ? 'flex' : 'block'} alignItems="center" justifyContent="center" pb={7}> 
                <Box>
                    <Zoom>
                        <img src={view} alt={view} width="100%" />
                    </Zoom>
                </Box>
                <Box width="100%">
                    <Zoom>
                        {data.map((v, d) => (
                            <Box px={5} key={d}>
                                <Box pt={2}>{v.label}</Box>
                                <Box display="flex" alignItems="center">
                                    <Box width={smallview ? "75%" : "100%"} >
                                        <BorderLinearProgress variant="determinate" value={v.value}/>
                                    </Box>
                                    <Box fontSize="12px" ml={2}>{`${v.value}%`}</Box>
                                </Box>
                            </Box>
                            ))}
                    </Zoom>
                </Box>
            </Box>
        </Box>
    )
}
