/* npm imports: common */
import { createLogger } from 'redux-logger';

const reduxLogger = createLogger({
	duration: true,
	collapsed: true,
	diff: true,
	colors: {
		title: () => '#139BFE',
		prevState: () => '#1C5FAF',
		action: () => '#149945',
		nextState: () => '#A47104',
		error: () => '#ff0005',
	},
});

export { reduxLogger };
