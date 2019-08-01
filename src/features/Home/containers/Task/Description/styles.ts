/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		typography: {
			flexGrow: 1,
			flexShrink: 2,
			width: '100%',
			padding: '0 20px',
		},
	})
);
