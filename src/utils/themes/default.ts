/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* NOTE: usage: { propName: defaultTheme.propName } */
export const defaultTheme = createMuiTheme({
	gradients: {
		primary: 'linear-gradient(45deg, #26a69a 30%, #66bb6a 90%)',
		secondary: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	},
	sizes: {
		footer: 80,
	},
});
