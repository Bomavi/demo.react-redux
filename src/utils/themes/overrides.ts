/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* local imports: common */
import { defaultTheme } from './default';

const drawerWidth = 300;

/* NOTE: usage: { overrides: themeWithOverrides.overrides } */
export const themeWithOverrides = createMuiTheme({
	overrides: {
		MuiDrawer: {
			root: {
				width: drawerWidth,
			},
			docked: {
				width: drawerWidth,
			},
			paper: {
				width: drawerWidth,
			},
		},
		MuiTextField: {
			root: {
				'& input:-webkit-autofill': {
					'-webkit-transition-delay': '99999s',
				},
				'& input:-webkit-autofill:hover': {
					'-webkit-transition-delay': '99999s',
				},
				'& input:-webkit-autofill:focus': {
					'-webkit-transition-delay': '99999s',
				},
				'& input:-webkit-autofill:active': {
					'-webkit-transition-delay': '99999s',
				},
			},
		},
	},
	gradients: defaultTheme.gradients,
	sizes: defaultTheme.sizes,
});
