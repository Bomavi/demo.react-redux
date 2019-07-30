/* npm imports: common */
import { call, put } from 'redux-saga/effects';

/* root imports: common */
import { services } from 'config/services';
import { setInProgress, logoutOnSuccess, logoutOnFail } from 'actions/auth';

export function* logoutWorker() {
	yield put(setInProgress(true));

	try {
		const id = yield call(services.auth.logout);

		yield put(logoutOnSuccess(id));
	} catch (e) {
		yield put(logoutOnFail(e.message));
	} finally {
		yield put(setInProgress(false));
	}
}
