/* mock imports: common */
import { task } from '__mocks__/data';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, createTaskOnSuccess, createTaskOnFail } from 'actions/tasks';

/* local imports: common */
import { createWorker } from '.';

describe('Saga: CREATE_TASK:', () => {
	it('CREATE_TASK_ON_FAIL:', async () => {
		mockedTasksServerResponse.initFailResponse();
		const dispatched = await recordSaga(createWorker);
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(createTaskOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	it('CREATE_TASK_ON_SUCCESS:', async () => {
		mockedTasksServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(createWorker);
		mockedTasksServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(createTaskOnSuccess(task));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	mockedTasksServerResponse.restore();
});
