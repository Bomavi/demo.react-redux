/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { GuestForm, LoginForm } from './containers';
import { useStyles } from './styles';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xs">
			<GuestForm />
			<Typography className={classes.typography} noWrap variant="h5" align="center">
				OR
			</Typography>
			<LoginForm />
		</Container>
	);
};

export { Login };
