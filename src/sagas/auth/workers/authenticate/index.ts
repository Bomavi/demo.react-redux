/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/auth';
import { services } from 'config/services';

export function* authenticateWorker() {
	// yield put(uiActions.startTasksFetching());

	try {
		const response = yield call(services.auth.authenticate);
		const user = yield call(response);

		yield put(actions.authenticateOnSuccess(user));
	} catch (e) {
		yield put(actions.authenticateOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
