/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import {
	UsernameInput,
	PasswordInput,
	LoginTabs,
	LoginButton,
} from 'features/Login/components';
import { State } from 'reducers';
import { login, register } from 'actions/auth';
import { AuthActionTypes } from 'actions/auth/types';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
	bindActionCreators(
		{
			login,
			register,
		},
		dispatch
	);

interface LoginFormProps extends WithStyles<typeof styles> {}

interface LoginFormState {
	tabIndex: number;
	username: string;
	password: string;
	repeatPassword: string;
}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	LoginFormProps;

class LoginFormComponent extends React.Component<Props, LoginFormState> {
	public state = {
		tabIndex: 0,
		username: '',
		password: '',
		repeatPassword: '',
	};

	public get isPasswordCorrect() {
		return this.state.password === this.state.repeatPassword;
	}

	public get isLoginReady() {
		return !!this.state.username && !!this.state.password;
	}

	public get isRegistrationReady() {
		return this.isLoginReady && this.isPasswordCorrect;
	}

	private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.setState(() => ({
			tabIndex: value,
		}));
	};

	public usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.setState(() => ({
			username: value,
		}));
	};

	public passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.setState(() => ({
			password: value,
		}));
	};

	public repeatPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.setState(() => ({
			repeatPassword: value,
		}));
	};

	public loginHandler = () => {
		const { login } = this.props;
		const userData = {
			username: this.state.username,
			password: this.state.password,
		};

		if (this.isLoginReady) login(userData);
	};

	public registrationHandler = () => {
		const { register } = this.props;
		const userData = {
			username: this.state.username,
			password: this.state.password,
		};

		if (this.isRegistrationReady) register(userData);
	};

	public render() {
		const { tabIndex, username, password, repeatPassword } = this.state;
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<LoginTabs tabIndex={tabIndex} onChange={this.tabClickHandler} />
				<div className={classes.wrapper}>
					<UsernameInput
						value={username}
						onChange={this.usernameChangeHandler}
					/>
					<PasswordInput
						value={password}
						onChange={this.passwordChangeHandler}
					/>
					{tabIndex === 0 && (
						<LoginButton
							marginTop={14}
							gradient="secondary"
							onClick={this.loginHandler}
						>
							Login
						</LoginButton>
					)}
					{tabIndex === 1 && (
						<>
							<PasswordInput
								repeatPassword
								value={repeatPassword}
								onChange={this.repeatPasswordChangeHandler}
							/>
							<LoginButton
								marginTop={14}
								gradient="secondary"
								onClick={this.registrationHandler}
							>
								Register
							</LoginButton>
						</>
					)}
				</div>
			</Paper>
		);
	}
}

const LoginFormWithStyles = withStyles(styles)(LoginFormComponent);
const LoginFormWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFormWithStyles);

export const LoginForm = LoginFormWithRedux;
