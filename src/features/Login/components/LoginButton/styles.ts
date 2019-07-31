/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { LoginButtonProps } from './index';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: (p: LoginButtonProps) => ({
			height: 48,
			padding: '0 30px',
			marginTop: p.marginTop,
			border: 0,
			background: theme.gradients[p.gradient],
			boxShadow: '0 3px 5px 2px rgba(0,0,0, 0.1)',
			color: 'white',
		}),
	})
);
