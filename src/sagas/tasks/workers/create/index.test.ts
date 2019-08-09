/* mock imports: common */
import { task } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, createTaskOnSuccess, createTaskOnFail } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { createWorker } from '.';

describe('Saga: CREATE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.CREATE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(createWorker);
		const toEqual = [
			setInProgress(true),
			createTaskOnFail('Error: Network Error'),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.CREATE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(createWorker);
		const toEqual = [
			setInProgress(true),
			createTaskOnSuccess(task),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
