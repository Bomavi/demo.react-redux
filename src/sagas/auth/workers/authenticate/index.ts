/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import {
	authenticateOnSuccess,
	authenticateOnFail,
	setIsInitialized,
} from 'actions/auth';

export function* authenticateWorker() {
	try {
		const user = yield call(services.auth.authenticate);

		yield put(authenticateOnSuccess(user));
	} catch (e) {
		yield put(authenticateOnFail(e.message));
	} finally {
		yield put(setIsInitialized(true));
	}
}
