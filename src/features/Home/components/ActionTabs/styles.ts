/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		tabContent: {
			padding: 20,
		},
	});
