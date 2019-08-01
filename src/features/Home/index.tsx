/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';

/* local imports: common */
import { ActionTabs, TaskList } from './containers';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
	<Container maxWidth="md">
		<ActionTabs />
		<TaskList />
	</Container>
);

export { Home };
