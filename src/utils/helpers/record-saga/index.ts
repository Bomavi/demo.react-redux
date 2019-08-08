/* npm imports: common */
import { runSaga } from 'redux-saga';

export const recordSaga = async (saga: any, initialAction: any = {}) => {
	const dispatched: any[] = [];

	await runSaga(
		{
			dispatch: action => dispatched.push(action),
			getState: () => ({ tasks: { search: { q: '' } } }), // TODO: fix global mocked state
		},
		saga,
		initialAction
	).toPromise();

	return dispatched;
};
