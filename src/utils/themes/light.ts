/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* local imports: common */
import { defaultTheme } from './default';
import { themeWithOverrides } from './overrides';

const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#26a69a',
		},
		secondary: {
			main: '#ff5722',
		},
	},
	gradients: defaultTheme.gradients,
	sizes: defaultTheme.sizes,
	overrides: themeWithOverrides.overrides,
});

export { lightTheme };
