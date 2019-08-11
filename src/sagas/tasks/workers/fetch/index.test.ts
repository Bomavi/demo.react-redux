/* mock imports: common */
import { tasks } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setIsFetching, fetchTasksOnSuccess, fetchTasksOnFail } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { fetchWorker } from '.';

describe('Saga: FETCH_TASKS', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.FETCH_TASKS_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(fetchWorker);
		const toEqual = [
			setIsFetching(true),
			fetchTasksOnFail('Network Error'),
			setIsFetching(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.FETCH_TASKS_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(fetchWorker);
		const toEqual = [
			setIsFetching(true),
			fetchTasksOnSuccess(tasks),
			setIsFetching(false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
