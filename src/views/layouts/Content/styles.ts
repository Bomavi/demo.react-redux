/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		main: {
			display: 'flex',
			width: '100%',
			padding: '30px 0',
		},
		toolbar: theme.mixins.toolbar,
	});
