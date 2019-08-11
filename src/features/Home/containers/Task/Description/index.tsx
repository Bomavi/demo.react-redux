/* npm imports: common */
import React from 'react';
import cx from 'classnames';

/* npm imports: material-ui/core */
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { useStyles } from './styles';

export interface DescriptionProps {
	completed: boolean;
}

const Description: React.FC<DescriptionProps> = React.memo(({ children, completed }) => {
	const classes = useStyles();

	return (
		<Typography
			className={cx(classes.typography, { completed })}
			title={String(children)}
			noWrap
			variant="body1"
		>
			{children}
		</Typography>
	);
});

export { Description };
