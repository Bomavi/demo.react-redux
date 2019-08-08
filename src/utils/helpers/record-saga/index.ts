/* npm imports: common */
import { runSaga } from 'redux-saga';

/* root imports: common */
import { getState } from '__mocks__/store';

export const recordSaga = async (saga: any, initialAction: any = {}) => {
	const dispatched: any[] = [];

	await runSaga(
		{
			dispatch: action => dispatched.push(action),
			getState: () => getState(),
		},
		saga,
		initialAction
	).toPromise();

	return dispatched;
};
