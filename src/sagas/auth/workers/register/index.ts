/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import {
	setInProgress,
	LoginAction,
	loginOnSuccess,
	registerOnFail,
} from 'actions/auth';

export function* registerWorker({ payload }: LoginAction) {
	yield put(setInProgress(true));

	try {
		const user = yield call(services.auth.register, payload);

		yield put(loginOnSuccess(user));
	} catch (e) {
		yield put(registerOnFail(e.message));
	} finally {
		yield put(setInProgress(false));
	}
}
