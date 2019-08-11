/* mock imports: common */
import { task } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import {
	setUpdateInProgress,
	updateTaskOnSuccess,
	updateTaskOnFail,
} from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { updateWorker } from '.';

describe('Saga: UPDATE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	const id = task._id;
	const data: TaskUpdateSchema = {
		description: task.description,
		completed: task.completed,
	};
	const payload = {
		id,
		data,
	};

	test(types.UPDATE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(updateWorker, { payload });
		const toEqual = [
			setUpdateInProgress(id, true),
			updateTaskOnFail('Network Error'),
			setUpdateInProgress(id, false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.UPDATE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(updateWorker, { payload });
		const toEqual = [
			setUpdateInProgress(id, true),
			updateTaskOnSuccess(task),
			setUpdateInProgress(id, false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
