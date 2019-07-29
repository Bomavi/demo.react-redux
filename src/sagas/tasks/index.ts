// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/tasks/types';

import { fetchWorker } from './workers/fetch';

export default Object.freeze({
	*fetchWatcher() {
		yield takeEvery(types.FETCH_TASKS, fetchWorker);
	},
});
