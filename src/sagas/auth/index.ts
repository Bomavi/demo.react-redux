/* npm imports: common */
import { takeEvery } from 'redux-saga/effects';

/* root imports: common */
import * as types from 'actions/auth/types';

/* local imports: common */
import { authenticateWorker } from './workers/authenticate';
import { loginWorker } from './workers/login';
import { registerWorker } from './workers/register';
import { logoutWorker } from './workers/logout';

export default Object.freeze({
	*authenticateWatcher() {
		yield takeEvery(types.AUTHENTICATE, authenticateWorker);
	},
	*loginWatcher() {
		yield takeEvery(types.LOGIN, loginWorker);
	},
	*registerWatcher() {
		yield takeEvery(types.REGISTER, registerWorker);
	},
	*logoutWatcher() {
		yield takeEvery(types.LOGOUT, logoutWorker);
	},
});
