interface Gradietns {
	primary: string;
	secondary: string;
}

interface MuiThemeSizes {
	footer: number;
}

declare type MUIThemeType = 'light' | 'dark';

declare global {
	declare module '@material-ui/core/styles/createMuiTheme' {
		interface Theme {
			gradients: Gradietns;
			sizes: MuiThemeSizes;
		}
		// allow configuration using `createMuiTheme`
		interface ThemeOptions {
			gradients: Gradietns;
			sizes: MuiThemeSizes;
		}
	}
}
