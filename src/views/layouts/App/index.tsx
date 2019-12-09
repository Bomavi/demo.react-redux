/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { ThemeProvider } from '@material-ui/styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/* root imports: view components */
import { Content } from 'views/layouts';

/* root imports: common */
import { Routes } from 'routes';
import { State } from 'reducers';
import { authenticate } from 'actions/auth';
import { AuthActionTypes } from 'actions/auth/types';
import { getSelectedTheme } from 'selectors';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	selectedTheme: getSelectedTheme(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
	bindActionCreators(
		{
			authenticate,
		},
		dispatch
	);

interface AppProps extends WithStyles<typeof styles> {}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	AppProps;

class AppComponent extends React.Component<Props> {
	public componentDidMount() {
		this.props.authenticate();
	}

	public render() {
		const { classes, selectedTheme } = this.props;

		return (
			<ThemeProvider theme={selectedTheme}>
				<>
					<CssBaseline />
					<div className={classes.app}>
						<Content>
							<Routes />
						</Content>
					</div>
				</>
			</ThemeProvider>
		);
	}
}

const AppWithStyles = withStyles(styles)(AppComponent);
const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(AppWithStyles);

export const App = AppWithRedux;
