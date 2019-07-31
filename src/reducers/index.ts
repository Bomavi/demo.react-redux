/* npm imports: common */
import { combineReducers } from 'redux';

/* local imports: common */
import { auth } from './auth';
import { tasks } from './tasks';
import { ui } from './ui';

export const rootReducer = combineReducers({
	auth,
	tasks,
	ui,
});

export type State = ReturnType<typeof rootReducer>;
