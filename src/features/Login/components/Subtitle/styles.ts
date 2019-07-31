/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		subtitle: {
			marginBottom: 20,
			textTransform: 'uppercase',
		},
	})
);
