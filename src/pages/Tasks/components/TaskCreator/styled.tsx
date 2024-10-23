import { alpha, styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => {
  return `
    background-color: ${alpha(theme.palette.primary.main, 0.05)};

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      background-color: ${alpha(theme.palette.primary.main, 0.06)};
    }
  
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.text.primary};
    },
  `;
});
