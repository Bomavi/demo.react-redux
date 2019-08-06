/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { State } from 'reducers';
import { createTask } from 'actions/tasks';
import { TaskActionTypes } from 'actions/tasks/types';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	inProgress: state.tasks.inProgress,
});

const mapDispatchToProps = (dispatch: Dispatch<TaskActionTypes>) =>
	bindActionCreators(
		{
			createTask,
		},
		dispatch
	);

interface AddTaskProps extends WithStyles<typeof styles> {}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	AddTaskProps;

class AddTaskComponent extends React.Component<Props> {
	public actionHandler = (value: string) => {
		if (value) {
			this.props.createTask({ description: value, completed: false });
		}
	};

	public render() {
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

const AddTaskWithStyles = withStyles(styles)(AddTaskComponent);
const AddTaskWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTaskWithStyles);

export const AddTask = AddTaskWithRedux;
