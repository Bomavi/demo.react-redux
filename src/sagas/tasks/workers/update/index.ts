/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/tasks';
import { services } from 'config/services';

interface UpdateWorkerProps {
	id: string;
	data: TaskUpdateSchema;
}

export function* updateWorker({ payload }: TAction<UpdateWorkerProps>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!payload) throw new Error('no payload found');

		const response = yield call(
			services.api.tasks.update,
			payload.id,
			payload.data
		);
		const task = yield call(response);

		yield put(actions.updateTaskOnSuccess(task));
	} catch (e) {
		yield put(actions.updateTaskOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
