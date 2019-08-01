/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import { history } from 'config/history';
import {
	setInProgress,
	LoginAction,
	registerOnSuccess,
	registerOnFail,
} from 'actions/auth';

export function* registerWorker({ payload }: LoginAction) {
	yield put(setInProgress(true));

	try {
		const user = yield call(services.auth.register, payload);

		yield put(registerOnSuccess(user));
		yield call(history.push, '/' as any);
	} catch (e) {
		yield put(registerOnFail(e.message));
	} finally {
		yield put(setInProgress(false));
	}
}
