/* mock imports: common */
import { task } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import {
	setDeleteInProgress,
	deleteTaskOnSuccess,
	deleteTaskOnFail,
} from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { deleteWorker } from '.';

describe('Saga: DELETE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	const id = task._id;

	test(types.DELETE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(deleteWorker, { payload: id });
		const toEqual = [
			setDeleteInProgress(id, true),
			deleteTaskOnFail('Network Error'),
			setDeleteInProgress(id, false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.DELETE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(deleteWorker, { payload: id });
		const toEqual = [
			setDeleteInProgress(id, true),
			deleteTaskOnSuccess(id),
			setDeleteInProgress(id, false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
