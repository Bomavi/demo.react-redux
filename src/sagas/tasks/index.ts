/* npm imports: common */
import { takeEvery } from 'redux-saga/effects';

/* root imports: common */
import * as types from 'actions/tasks/types';

/* local imports: common */
import { fetchWorker } from './workers/fetch';
import { createWorker } from './workers/create';
import { updateWorker } from './workers/update';
import { deleteWorker } from './workers/delete';

export default Object.freeze({
	*fetchWatcher() {
		yield takeEvery(types.FETCH_TASKS, fetchWorker);
	},
	*createWatcher() {
		yield takeEvery(types.CREATE_TASK, createWorker);
	},
	*updateWatcher() {
		yield takeEvery(types.UPDATE_TASK, updateWorker);
	},
	*deleteWatcher() {
		yield takeEvery(types.DELETE_TASK, deleteWorker);
	},
});
