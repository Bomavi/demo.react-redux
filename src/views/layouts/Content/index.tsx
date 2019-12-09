/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* root imports: common */
import { State } from 'reducers';
import { getIsAuthenticated } from 'selectors';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = () => ({});

interface ContentProps extends WithStyles<typeof styles> {
	children?: React.ReactNode;
}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	ContentProps;

class ContentComponent extends React.Component<Props> {
	public render() {
		const { children, classes, isAuthenticated } = this.props;

		return (
			<>
				<Header />
				<div className={classes.toolbar} />
				{isAuthenticated && <Drawer />}
				<main className={classes.main}>{children}</main>
				<Footer />
			</>
		);
	}
}

const ContentWithStyles = withStyles(styles)(ContentComponent);
const ContentWithRedux = connect(mapStateToProps, mapDispatchToProps)(ContentWithStyles);

export const Content = ContentWithRedux;
