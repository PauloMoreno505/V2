import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export const BorderLinearProgress = styled(LinearProgress)({
    maxWidth:'350px',
    height: 6,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#ABABAB'
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#242424'
    }
});