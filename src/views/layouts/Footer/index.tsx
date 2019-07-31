/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { useStyles } from './styles';

const Footer: React.FC = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography className={classes.title} noWrap variant="body1" align="center">
				Created by Maksym Bozhenov for DEMO purpose
			</Typography>
		</footer>
	);
};

export { Footer };
