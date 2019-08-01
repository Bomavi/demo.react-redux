/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			flexShrink: 2,
			marginTop: 16,
			padding: 20,
			paddingTop: 0,
		},
		header: {
			display: 'flex',
			width: '100%',
		},
		title: {
			flexBasis: '100%',
			lineHeight: '60px',
			// marginBottom: 20,
		},
	});
