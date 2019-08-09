/* npm imports: common */
import { runSaga } from 'redux-saga';

/* root imports: common */
import { getUpdatedState } from '__mocks__/state';

export const recordSaga = async (saga: any, initialAction: any = {}) => {
	const dispatched: any[] = [];

	await runSaga(
		{
			dispatch: action => dispatched.push(action),
			getState: () => getUpdatedState(),
		},
		saga,
		initialAction
	).toPromise();

	return dispatched;
};
