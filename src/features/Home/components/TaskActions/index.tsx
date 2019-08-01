/* npm imports: common */
import React from 'react';
import cx from 'classnames';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

/* root imports: view components */
import { Icon } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

export interface TaskActionsProps {
	disabled?: boolean;
	isFetching?: boolean;
	onDelete?: () => void;
	onEdit: () => void;
}

const TaskActions: React.FC<TaskActionsProps> = ({
	children,
	disabled,
	onDelete,
	onEdit,
	isFetching = false,
}) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={cx(classes.root, 'small')}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	if (!onDelete && children) {
		return <div className={classes.root}>{children}</div>;
	}

	return (
		<div className={classes.root}>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					onClick={onEdit}
				>
					<Icon name="pencil" size="sm" />
				</IconButton>
			</div>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					onClick={onDelete}
				>
					<Icon name="delete" size="sm" />
				</IconButton>
			</div>
		</div>
	);
};

export { TaskActions };
