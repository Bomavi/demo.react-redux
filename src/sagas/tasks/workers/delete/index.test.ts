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

/* local imports: common */
import { deleteWorker } from '.';

describe('Saga: DELETE_TASK:', () => {
	const id = task._id;

	it('DELETE_TASK_ON_FAIL:', async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(deleteWorker, { payload: id });
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setDeleteInProgress(id, true));
		expect(dispatched).toContainEqual(deleteTaskOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setDeleteInProgress(id, false));
	});

	it('DELETE_TASK_ON_SUCCESS:', async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(deleteWorker, { payload: id });
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setDeleteInProgress(id, true));
		expect(dispatched).toContainEqual(deleteTaskOnSuccess(id));
		expect(dispatched).toContainEqual(setDeleteInProgress(id, false));
	});

	mockedTasksServerResponse.restore();
});
