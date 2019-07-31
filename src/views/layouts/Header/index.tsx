/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { State } from 'reducers';
import { toggleDrawer } from 'actions/ui';
import { UIActionTypes } from 'actions/ui/types';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	user: state.auth.user,
});

const mapDispatchToProps = (dispatch: Dispatch<UIActionTypes>) =>
	bindActionCreators(
		{
			toggleDrawer,
		},
		dispatch
	);

interface HeaderProps extends WithStyles<typeof styles> {}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	HeaderProps;

class HeaderComponent extends React.Component<Props> {
	private toggleDrawerHandler = () => {
		if (this.props.toggleDrawer) this.props.toggleDrawer();
	};

	public render() {
		const { classes, user } = this.props;

		return (
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap className={classes.title}>
						TODO'SHER
					</Typography>
					{user && (
						<Typography variant="subtitle2" noWrap className={classes.hello}>
							Hello, {user.username}
						</Typography>
					)}
					{user && (
						<IconButton color="inherit" onClick={this.toggleDrawerHandler}>
							<Icon
								name="account-circle"
								color="white"
								size="md"
								svgSize="lg"
							/>
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

const HeaderWithStyles = withStyles(styles)(HeaderComponent);
const HeaderWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderWithStyles);

export const Header = HeaderWithRedux;
