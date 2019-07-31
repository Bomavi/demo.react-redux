/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		root: {},
		paper: {
			padding: 20,
		},
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			minHeight: 60,
			paddingTop: 10,
			paddingRight: 25,
			paddingBottom: 25,
			paddingLeft: 25,
			backgroundColor: theme.palette.background.default,
			borderRadius: 4,
		},
	});
