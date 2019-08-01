/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		main: {
			display: 'flex',
			width: '100%',
			paddingTop: 30,
			paddingBottom: theme.sizes.footer + 30,
		},
		toolbar: theme.mixins.toolbar,
	});
