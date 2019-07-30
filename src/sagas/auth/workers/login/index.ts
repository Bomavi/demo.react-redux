/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import {
	setInProgress,
	LoginAction,
	loginOnSuccess,
	loginOnFail,
} from 'actions/auth';

export function* loginWorker({ payload }: LoginAction) {
	yield put(setInProgress(true));

	try {
		const user = yield call(services.auth.login, payload);

		yield put(loginOnSuccess(user));
	} catch (e) {
		yield put(loginOnFail(e.message));
	} finally {
		yield put(setInProgress(false));
	}
}
