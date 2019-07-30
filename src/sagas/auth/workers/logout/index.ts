/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/auth';
import { services } from 'config/services';

export function* logoutWorker() {
	// yield put(uiActions.startTasksFetching());

	try {
		const response = yield call(services.auth.logout);
		const id = yield call(response);

		yield put(actions.logoutOnSuccess(id));
	} catch (e) {
		yield put(actions.logoutOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
