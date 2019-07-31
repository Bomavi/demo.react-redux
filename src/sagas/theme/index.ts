/* npm imports: common */
import { takeEvery } from 'redux-saga/effects';

/* root imports: common */
import * as types from 'actions/theme/types';

/* local imports: common */
import { switchWorker } from './workers/switch';

export default Object.freeze({
	*switchWatcher() {
		yield takeEvery(types.SWITCH_THEME, switchWorker);
	},
});
