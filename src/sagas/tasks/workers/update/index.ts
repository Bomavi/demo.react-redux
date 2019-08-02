/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import {
	setUpdateInProgress,
	UpdateTaskAction,
	updateTaskOnSuccess,
	updateTaskOnFail,
} from 'actions/tasks';

export function* updateWorker({ payload: { id, data } }: UpdateTaskAction) {
	yield put(setUpdateInProgress(id, true));

	try {
		const task = yield call(services.api.tasks.update, id, data);

		yield put(updateTaskOnSuccess(task));
	} catch (e) {
		yield put(updateTaskOnFail(e.message));
	} finally {
		yield put(setUpdateInProgress(id, false));
	}
}
