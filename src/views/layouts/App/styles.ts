/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		app: {
			position: 'relative',
			width: '100vw',
			minHeight: '100vh',
			fontFamily: 'Roboto, sans-serif',
		},
	});
