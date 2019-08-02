/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import {
	setDeleteInProgress,
	DeleteTaskAction,
	deleteTaskOnSuccess,
	deleteTaskOnFail,
} from 'actions/tasks';

export function* deleteWorker({ payload: id }: DeleteTaskAction) {
	yield put(setDeleteInProgress(id, true));

	try {
		const task = yield call(services.api.tasks.delete, id);

		yield put(deleteTaskOnSuccess(task));
	} catch (e) {
		yield put(deleteTaskOnFail(e.message));
	} finally {
		yield put(setDeleteInProgress(id, false));
	}
}
