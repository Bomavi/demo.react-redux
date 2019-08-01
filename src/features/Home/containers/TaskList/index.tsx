/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { motion } from 'framer-motion';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: view components */
import { Task } from 'features/Home/containers';

/* root imports: common */
import { State } from 'reducers';
import { fetchTasks } from 'actions/tasks';
import { TaskActionTypes } from 'actions/tasks/types';
import { getSortedTasks, getTasksIsEmpty, getTasksLenth } from 'selectors';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	tasks: getSortedTasks(state),
	isEmpty: getTasksIsEmpty(state),
	tasksLength: getTasksLenth(state),
});

const mapDispatchToProps = (dispatch: Dispatch<TaskActionTypes>) =>
	bindActionCreators(
		{
			fetchTasks,
		},
		dispatch
	);

interface TaskListProps extends WithStyles<typeof styles> {}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	TaskListProps;

class TaskListComponent extends React.Component<Props> {
	public componentDidMount() {
		this.props.fetchTasks();
	}

	public render() {
		const { classes, tasks, isEmpty, tasksLength } = this.props;

		return (
			<Paper className={classes.root}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List
				</Typography>
				{!isEmpty
					? tasks.map((task, i) => (
							<motion.div key={task._id} positionTransition>
								<Task task={task} isLastChild={tasksLength === i + 1} />
							</motion.div>
					  ))
					: 'no tasks'}
			</Paper>
		);
	}
}

const TaskListWithStyles = withStyles(styles)(TaskListComponent);
const TaskListWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskListWithStyles);

export const TaskList = TaskListWithRedux;
