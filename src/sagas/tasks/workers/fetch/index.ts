import { call, put } from 'redux-saga/effects';

import { actions } from 'actions/tasks';
import { services } from 'config/services';

export function* fetchWorker() {
	// yield put(uiActions.startTasksFetching());

	try {
		const response = yield call(services.api.tasks.search, {});
		const tasks = yield call(response);
		yield put(actions.fetchTasksOnSuccess(tasks));
	} catch (e) {
		yield put(actions.fetchTasksOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
