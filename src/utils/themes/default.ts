import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

import { themeOverrides } from './overrides';

export const theme = createTheme({
  //   gradients: {
  //     primary: 'linear-gradient(45deg, #26a69a 30%, #66bb6a 90%)',
  //     secondary: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   },
});

export const defaultTheme = createTheme(deepmerge(theme, themeOverrides));
