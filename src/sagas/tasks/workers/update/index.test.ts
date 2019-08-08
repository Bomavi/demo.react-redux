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

/* local imports: common */
import { updateWorker } from '.';

describe('Saga: UPDATE_TASK:', () => {
	const id = task._id;
	const data: TaskUpdateSchema = {
		description: task.description,
		completed: task.completed,
	};
	const payload = {
		id,
		data,
	};

	it('UPDATE_TASK_ON_FAIL:', async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(updateWorker, { payload });
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setUpdateInProgress(id, true));
		expect(dispatched).toContainEqual(updateTaskOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setUpdateInProgress(id, false));
	});

	it('UPDATE_TASK_ON_SUCCESS:', async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(updateWorker, { payload });
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setUpdateInProgress(id, true));
		expect(dispatched).toContainEqual(updateTaskOnSuccess(task));
		expect(dispatched).toContainEqual(setUpdateInProgress(id, false));
	});

	mockedTasksServerResponse.restore();
});
