import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

import { COLORS } from 'src/utils/constants/colors';

import { defaultTheme } from './default';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary.main,
    },
    secondary: {
      main: COLORS.secondary.main,
    },
    text: {
      primary: '#4a4a4a',
      secondary: '#20877e',
    },
    background: {
      default: '#eee',
    },
  },
});

export const lightTheme = createTheme(deepmerge(defaultTheme, theme));
