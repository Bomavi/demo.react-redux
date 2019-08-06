/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* root imports: view components */
import { AddTask, Search } from 'features/Home/containers';

/* local imports: common */
import { styles } from './styles';

interface ActionTabsProps extends WithStyles<typeof styles> {}

interface ActionTabsState {
	tabIndex: number;
}

class ActionTabsComponent extends React.Component<ActionTabsProps, ActionTabsState> {
	public state = {
		tabIndex: 0,
	};

	private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.setState(() => ({
			tabIndex: value,
		}));
	};

	public render() {
		const { tabIndex } = this.state;
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Tabs
					value={tabIndex}
					onChange={this.tabClickHandler}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label="Add new task" />
					<Tab label="Search tasks" />
				</Tabs>
				<div className={classes.tabContent}>
					{tabIndex === 0 && <AddTask />}
					{tabIndex === 1 && <Search />}
				</div>
			</Paper>
		);
	}
}

const ActionTabs = withStyles(styles)(ActionTabsComponent);

export { ActionTabs };
