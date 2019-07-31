/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* local imports: common */
// import { useStyles } from './styles';

export interface LoginTabsProps {
	tabIndex: number;
	onChange: (e: React.ChangeEvent<{}>, v: number) => void;
}

const LoginTabs: React.FC<LoginTabsProps> = ({ tabIndex, onChange }) => {
	// const classes = useStyles();

	return (
		<Tabs
			variant="fullWidth"
			indicatorColor="secondary"
			value={tabIndex}
			onChange={onChange}
		>
			<Tab label="Login" />
			<Tab label="Register" />
		</Tabs>
	);
};

export { LoginTabs };
