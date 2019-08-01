/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			position: 'fixed',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0,0,0, 0.4)',
			zIndex: 2,
		},
	})
);
