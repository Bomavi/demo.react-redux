/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import cx from 'classnames';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { TaskCheckbox, TaskActions } from 'features/Home/components';

/* root imports: common */
import { State } from 'reducers';
import {
	updateTask,
	setUpdateInProgress,
	deleteTask,
	setDeleteInProgress,
} from 'actions/tasks';
import { TaskActionTypes } from 'actions/tasks/types';

/* local imports: common */
import { Description } from './Description';
import { EditInput } from './EditInput';
import { Backdrop } from './Backdrop';
import { styles } from './styles';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch<TaskActionTypes>) =>
	bindActionCreators(
		{
			updateTask,
			setUpdateInProgress,
			deleteTask,
			setDeleteInProgress,
		},
		dispatch
	);

interface TaskProps extends WithStyles<typeof styles> {
	task: TaskType;
	isLastChild: boolean;
}

interface TaskState {
	isHovered: boolean;
	isEditable: boolean;
}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	TaskProps;

class TaskComponent extends React.Component<Props> {
	public static defaultProps = {
		isLastChild: false,
	};

	public state = {
		isHovered: false,
		isEditable: false,
	};

	private mouseEnterHandler = () => {
		this.setState(() => ({
			isHovered: true,
		}));
	};

	private mouseLeaveHandler = () => {
		this.setState(() => ({
			isHovered: false,
		}));
	};

	private editHandler = () => {
		this.setState(({ isEditable }: TaskState) => ({
			isEditable: !isEditable,
		}));
		this.mouseLeaveHandler();
	};

	private completeHandler = () => {
		const { task, updateTask } = this.props;
		updateTask(task._id, { ...task, completed: !task.completed });
		this.mouseLeaveHandler();
	};

	private saveHandler = (value: string) => {
		const { task, updateTask } = this.props;
		updateTask(task._id, { ...task, description: value });
	};

	private deleteHandler = () => {
		const { task, deleteTask } = this.props;
		deleteTask(task._id);
	};

	public render() {
		const { isHovered, isEditable } = this.state;
		const { classes, task, isLastChild } = this.props;

		return (
			<div
				className={cx(classes.root, { isLastChild })}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
			>
				<TaskCheckbox
					value={task.completed}
					isFetching={task.updateInProgress}
					onChange={this.completeHandler}
				/>
				<Divider className={classes.divider} />
				<Description completed={task.completed}>{task.description}</Description>
				{isHovered && !task.deleteInProgress && (
					<Divider className={classes.divider} />
				)}
				{(isHovered || task.deleteInProgress) && (
					<TaskActions
						onEdit={this.editHandler}
						isFetching={task.deleteInProgress}
						onDelete={this.deleteHandler}
					/>
				)}
				<Backdrop fadeIn={isEditable} onClick={this.editHandler} />
				{isEditable && (
					<EditInput
						autoFocus
						isFetching={task.updateInProgress}
						defaultValue={task.description}
						onClick={this.saveHandler}
						onCancel={this.editHandler}
					/>
				)}
			</div>
		);
	}
}

const TaskWithStyles = withStyles(styles)(TaskComponent);
const TaskWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskWithStyles);

export const Task = TaskWithRedux;
