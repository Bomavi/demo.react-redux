/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/auth';
import { services } from 'config/services';

export function* loginWorker({ payload }: TAction<LoginType>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!payload) throw new Error('no payload found');

		const response = yield call(services.auth.login, payload);
		const user = yield call(response);

		yield put(actions.loginOnSuccess(user));
	} catch (e) {
		yield put(actions.loginOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
