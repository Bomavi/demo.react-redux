/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

/* local imports: common */
import { useStyles } from './styles';

export interface TaskCheckboxProps {
	value: boolean;
	disabled?: boolean;
	isFetching?: boolean;
	onChange: () => void;
}

const TaskCheckbox: React.FC<TaskCheckboxProps> = ({
	value,
	disabled,
	onChange,
	isFetching = false,
}) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={classes.root}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<Checkbox
				checked={value}
				color="primary"
				disabled={disabled}
				onChange={onChange}
			/>
		</div>
	);
};

export { TaskCheckbox };
