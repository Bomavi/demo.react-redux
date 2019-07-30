/* npm imports: common */
import { all } from 'redux-saga/effects';

/* local imports: common */
import auth from './auth';
import tasks from './tasks';

export function* saga() {
	yield all([
		auth.authenticateWatcher(),
		auth.loginWatcher(),
		auth.registerWatcher(),
		auth.logoutWatcher(),

		tasks.fetchWatcher(),
		tasks.createWatcher(),
		tasks.updateWatcher(),
		tasks.deleteWatcher(),
	]);
}
