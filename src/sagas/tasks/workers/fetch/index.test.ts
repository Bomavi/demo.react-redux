/* mock imports: common */
import { tasks } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setIsFetching, fetchTasksOnSuccess, fetchTasksOnFail } from 'actions/tasks';

/* local imports: common */
import { fetchWorker } from '.';

describe('Saga: FETCH_TASKS:', () => {
	it('FETCH_TASKS_ON_FAIL:', async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(fetchWorker);
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setIsFetching(true));
		expect(dispatched).toContainEqual(fetchTasksOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setIsFetching(false));
	});

	it('FETCH_TASKS_ON_SUCCESS:', async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(fetchWorker);
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setIsFetching(true));
		expect(dispatched).toContainEqual(fetchTasksOnSuccess(tasks));
		expect(dispatched).toContainEqual(setIsFetching(false));
	});

	mockedTasksServerResponse.restore();
});
