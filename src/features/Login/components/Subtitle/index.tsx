/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { useStyles } from './styles';

const Subtitle: React.FC = ({ children }) => {
	const classes = useStyles();

	return (
		<Typography
			className={classes.subtitle}
			noWrap
			variant="subtitle2"
			align="center"
		>
			{children}
		</Typography>
	);
};

export { Subtitle };
