/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import { Subtitle, LoginButton } from 'features/Login/components';
import { State } from 'reducers';
import { login } from 'actions/auth';
import { AuthActionTypes } from 'actions/auth/types';

/* local imports: common */
import { styles } from './styles';

interface GuestFormProps extends WithStyles<typeof styles> {
	login: typeof login;
}

class GuestFormComponent extends React.Component<GuestFormProps> {
	public loginHandler = () => {
		this.props.login({ isGuest: true });
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<Subtitle>Use Guest Access</Subtitle>
				<div className={classes.wrapper}>
					<LoginButton gradient="primary" onClick={this.loginHandler}>
						Get access
					</LoginButton>
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
	bindActionCreators(
		{
			login,
		},
		dispatch
	);

const GuestFormWithStyles = withStyles(styles)(GuestFormComponent);
const GuestFormWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(GuestFormWithStyles);

export const GuestForm = GuestFormWithRedux;
