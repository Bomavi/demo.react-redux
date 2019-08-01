/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* local imports: common */
import { defaultTheme } from './default';
import { themeWithOverrides } from './overrides';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#00796b',
		},
		secondary: {
			main: '#e64a19',
		},
	},
	gradients: defaultTheme.gradients,
	sizes: defaultTheme.sizes,
	overrides: themeWithOverrides.overrides,
});

export { darkTheme };
