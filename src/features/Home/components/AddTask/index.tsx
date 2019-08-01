/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { createTask } from 'actions/tasks';

/* local imports: common */
import { styles } from './styles';

interface AddTaskProps extends WithStyles<typeof styles> {
	inProgress: boolean;
	createTask: typeof createTask;
}

class AddTaskComponent extends React.Component<AddTaskProps> {
	public actionHandler = (value: string) => {
		if (value) {
			this.props.createTask({ description: value, completed: false });
		}
	};

	public render() {
		// const { classes } = this.props;
		const { inProgress } = this.props;

		return (
			<CustomInput
				icon={{
					name: 'plus',
					svgSize: 'md',
					title: 'Add',
				}}
				isFetching={inProgress}
				placeholder="Type task description..."
				onClick={this.actionHandler}
			/>
		);
	}
}

const AddTask = withStyles(styles)(AddTaskComponent);

export { AddTask };
