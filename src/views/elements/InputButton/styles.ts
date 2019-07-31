/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: 60,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		iconButton: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
			'&.primary': {
				'& svg': {
					fill: theme.palette.primary.main,
				},
			},
		},
	})
);
