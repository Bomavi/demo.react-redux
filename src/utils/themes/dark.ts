import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

import { COLORS } from 'src/utils/constants/colors';

import { defaultTheme } from './default';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: COLORS.primary.main,
    },
    secondary: {
      main: COLORS.secondary.main,
    },
    text: {
      primary: '#ddd',
      secondary: '#26a69a',
    },
    background: {
      default: '#222',
      paper: '#333',
    },
  },
});

export const darkTheme = createTheme(deepmerge(defaultTheme, theme));
