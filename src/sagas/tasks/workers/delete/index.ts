/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/tasks';
import { services } from 'config/services';

export function* deleteWorker({ payload: id }: TAction<string>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!id) throw new Error('no id found');

		const response = yield call(services.api.tasks.delete, id);
		const task = yield call(response);

		yield put(actions.deleteTaskOnSuccess(task));
	} catch (e) {
		yield put(actions.deleteTaskOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
