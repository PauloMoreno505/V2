import { Box } from '@mui/material';
import { Home } from './component/desktopView/DHome';
import { DSkills } from './component/desktopView/DSkills';
import { MHome } from './component/mobileView/MHome';
import { MSkills } from './component/mobileView/MSkills';

function App() {
	return (
		<Box>
			<Box sx={{display:{sm:'none', xs:'none', md:'flex', flexDirection:'column'}}}>
				<Home/>
				<DSkills/>
			</Box>
			<Box sx={{display:{sm:'flex', xs:'flex', md:'none', flexDirection:'column'}}}>
				<MHome/>
				<MSkills/>
			</Box>
		</Box>
	);
}

export default App;
