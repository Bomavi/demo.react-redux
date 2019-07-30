/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import * as actions from 'actions/auth';
import { services } from 'config/services';

export function* registerWorker({ payload }: TAction<RegisterType>) {
	// yield put(uiActions.startTasksFetching());

	try {
		if (!payload) throw new Error('no payload found');

		const response = yield call(services.auth.register, payload);
		const user = yield call(response);

		yield put(actions.loginOnSuccess(user));
	} catch (e) {
		yield put(actions.registerOnFail(e.message));
	} finally {
		// yield put(uiActions.stopTasksFetching());
	}
}
