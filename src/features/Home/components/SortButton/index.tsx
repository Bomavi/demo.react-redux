/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';

/* root imports: common */
import { Icon } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

export interface SortButtonProps {
	sortKey: SortKey;
	disabled?: boolean;
	onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortKey, disabled, onClick }) => {
	const classes = useStyles();

	const isAsc = sortKey === 'asc';
	const isDesc = sortKey === 'desc';

	const newFirstTitle = 'Recently created first';
	const oldFirstTitle = 'Oldest first';

	return (
		<div className={classes.root}>
			<IconButton
				title={isDesc ? oldFirstTitle : newFirstTitle}
				disabled={disabled}
				onClick={onClick}
			>
				{isAsc && <Icon name="sort-ascending" />}
				{isDesc && <Icon name="sort-descending" />}
			</IconButton>
		</div>
	);
};

export { SortButton };
