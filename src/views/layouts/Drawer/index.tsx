/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* root imports: common */
import { State } from 'reducers';
import { getThemeNameToSwitch } from 'selectors';
import { logout } from 'actions/auth';
import { AuthActionTypes } from 'actions/auth/types';
import { switchTheme } from 'actions/theme';
import { ThemeActionTypes } from 'actions/theme/types';
import { toggleDrawer } from 'actions/ui';
import { UIActionTypes } from 'actions/ui/types';

/* local imports: common */
import { styles } from './styles';
import { DrawerItem } from './DrawerItem';

const mapStateToProps = (state: State) => ({
	inProgress: state.auth.inProgress,
	isDrawerOpen: state.ui.isDrawerOpen,
	theme: state.auth.theme,
	themeNameToSwitch: getThemeNameToSwitch(state),
});

const mapDispatchToProps = (
	dispatch: Dispatch<AuthActionTypes | ThemeActionTypes | UIActionTypes>
) =>
	bindActionCreators(
		{
			logout,
			switchTheme,
			toggleDrawer,
		},
		dispatch
	);

interface DrawerProps extends WithStyles<typeof styles> {}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	DrawerProps;

class DrawerComponent extends React.Component<Props> {
	public componentWillUnmount() {
		this.hideDrawer();
	}

	private hideDrawer = () => {
		this.props.toggleDrawer(false);
	};

	private switchTheme = () => {
		const { switchTheme, themeNameToSwitch } = this.props;

		switchTheme(themeNameToSwitch);
	};

	public render() {
		const {
			classes,
			logout,
			theme,
			inProgress,
			isDrawerOpen,
			themeNameToSwitch,
		} = this.props;

		return (
			<MUIDrawer anchor="right" variant="persistent" open={isDrawerOpen}>
				<div className={classes.toolbar} />
				<List>
					<DrawerItem
						text={`Switch to ${themeNameToSwitch} theme`}
						iconName="compare"
						inProgress={theme.inProgress}
						onClick={this.switchTheme}
					/>
				</List>
				<Divider />
				<List>
					<DrawerItem
						text="Logout"
						iconName="logout-variant"
						inProgress={inProgress}
						onClick={logout}
					/>
				</List>
			</MUIDrawer>
		);
	}
}

const DrawerWithStyles = withStyles(styles)(DrawerComponent);
const DrawerWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(DrawerWithStyles);

export const Drawer = DrawerWithRedux;
