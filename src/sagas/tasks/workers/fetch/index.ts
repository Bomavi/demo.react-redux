/* npm imports: common */
import { call, select, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import { State } from 'reducers';
import { setIsFetching, fetchTasksOnSuccess, fetchTasksOnFail } from 'actions/tasks';

export function* fetchWorker() {
	yield put(setIsFetching(true));

	try {
		const getSearchParams = (state: State) => state.tasks.search;
		const searchParams = yield select(getSearchParams);
		const tasks = yield call(services.api.tasks.search, searchParams);

		yield put(fetchTasksOnSuccess(tasks));
	} catch (e) {
		yield put(fetchTasksOnFail(e.message));
	} finally {
		yield put(setIsFetching(false));
	}
}
