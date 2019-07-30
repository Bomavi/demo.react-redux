/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/tasks';
import { services } from 'config/services';

export function* createWorker({ payload }: TAction<TaskUpdateSchema>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!payload) throw new Error('no payload found');

		const response = yield call(services.api.tasks.create, payload);
		const task = yield call(response);

		yield put(actions.createTaskOnSuccess(task));
	} catch (e) {
		yield put(actions.createTaskOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
