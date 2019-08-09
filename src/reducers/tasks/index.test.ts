/* mock imports: common */
import { task, tasks } from '__mocks__/data';
import { getInitialState, getUpdatedState } from '__mocks__/state';

/* root imports: common */
import {
	searchTasks,
	sortTasks,
	setInProgress,
	setIsFetching,
	setUpdateInProgress,
	setDeleteInProgress,
	fetchTasksOnSuccess,
	createTaskOnSuccess,
	updateTaskOnSuccess,
	deleteTaskOnSuccess,
} from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { tasks as tasksReducer } from '.';

describe('Tasks reducer', () => {
	const initialState = getInitialState();
	const updatedState = getUpdatedState();
	const taskId = task._id;

	// test('DEFAULT STATE:', () => {
	// 	const nextState = tasksReducer(undefined, {});

	// 	expect(nextState).toEqual(initialState.tasks);
	// });

	test(types.SEARCH_TASKS, () => {
		const searchKey = updatedState.tasks.search.q;
		const nextState = tasksReducer(initialState.tasks, searchTasks(searchKey!));

		expect(nextState.search.q).toEqual(updatedState.tasks.search.q);
	});

	test(types.SORT_TASKS, () => {
		const sortKey = updatedState.tasks.sort;
		const nextState = tasksReducer(initialState.tasks, sortTasks(sortKey));

		expect(nextState.sort).toEqual(updatedState.tasks.sort);
	});

	test(types.SET_IS_FETCHING, () => {
		const nextState = tasksReducer(initialState.tasks, setIsFetching(true));

		expect(nextState.isFetching).toEqual(updatedState.tasks.isFetching);
	});

	test(types.SET_IN_PROGRESS, () => {
		const nextState = tasksReducer(initialState.tasks, setInProgress(true));

		expect(nextState.inProgress).toEqual(updatedState.tasks.inProgress);
	});

	test(types.SET_UPDATE_IN_PROGRESS, () => {
		const nextState = tasksReducer(
			updatedState.tasks,
			setUpdateInProgress(taskId, true)
		);
		const updatedTask: TaskType = nextState.taskList.find(t => t._id === taskId)!;

		expect(updatedTask.updateInProgress).toEqual(true);
	});

	test(types.SET_DELETE_IN_PROGRESS, () => {
		const nextState = tasksReducer(
			updatedState.tasks,
			setDeleteInProgress(taskId, true)
		);
		const deletedTask: TaskType = nextState.taskList.find(t => t._id === taskId)!;

		expect(deletedTask.deleteInProgress).toEqual(true);
	});

	test(types.FETCH_TASKS_ON_SUCCESS, () => {
		const nextState = tasksReducer(initialState.tasks, fetchTasksOnSuccess(tasks));

		expect(nextState.taskList).toEqual(updatedState.tasks.taskList);
	});

	test(types.CREATE_TASK_ON_SUCCESS, () => {
		const nextState = tasksReducer(initialState.tasks, createTaskOnSuccess(task));

		expect(nextState.taskList).toEqual([task]);
	});

	test(types.UPDATE_TASK_ON_SUCCESS, () => {
		const updatedTask = { ...task, description: 'testing...' };
		const nextState = tasksReducer(
			updatedState.tasks,
			updateTaskOnSuccess(updatedTask)
		);

		expect(nextState.taskList).toEqual(
			tasks.map(t => (t._id === updatedTask._id ? updatedTask : t))
		);
	});

	test(types.DELETE_TASK_ON_SUCCESS, () => {
		const nextState = tasksReducer(updatedState.tasks, deleteTaskOnSuccess(taskId));

		expect(nextState.taskList).toEqual(tasks.filter(t => t._id !== taskId));
	});
});
