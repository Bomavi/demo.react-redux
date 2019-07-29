// Core
import { all } from 'redux-saga/effects';

// Instruments
import tasks from './tasks';

export function* saga() {
	yield all([tasks.fetchWatcher()]);
}
