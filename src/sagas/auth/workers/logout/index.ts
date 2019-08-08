/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress, logoutOnSuccess, logoutOnFail } from 'actions/auth';

export function* logoutWorker() {
	yield put(setInProgress(true));

	try {
		yield call(services.auth.logout);

		yield put(logoutOnSuccess());
	} catch (e) {
		yield put(logoutOnFail(e.message));
	} finally {
		yield put(setInProgress(false));
	}
}
