/* npm imports: common */
import { combineReducers } from 'redux';

/* local imports: common */
import { auth } from './auth';
import { tasks } from './tasks';

export const rootReducer = combineReducers({
	auth,
	tasks,
});

export type State = ReturnType<typeof rootReducer>;
