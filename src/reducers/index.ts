import { combineReducers } from 'redux';

import { auth } from './auth';
import { tasks } from './tasks';

const rootReducer = combineReducers({
	auth,
	tasks,
});

export { rootReducer };
