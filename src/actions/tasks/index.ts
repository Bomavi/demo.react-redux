// Instruments
import types from './types';

export const actions = Object.freeze({
	// SEARCH
	searchTasks: (search: string) => ({
		type: types.SEARCH_TASKS,
		payload: search,
	}),

	// FETCH
	fetchTasks: () => ({
		type: types.FETCH_TASKS,
	}),

	fetchTasksOnSuccess: (tasks: TaskType[]) => ({
		type: types.FETCH_TASKS_ONSUCCESS,
		payload: tasks,
	}),

	fetchTasksOnFail: (error: string) => ({
		type: types.FETCH_TASKS_ONFAIL,
		payload: error,
		error: true,
	}),

	// UPDATE
	updateTask: (task: TaskUpdateSchema) => ({
		type: types.UPDATE_TASK,
		payload: task,
	}),

	updateTaskOnSuccess: (task: TaskType) => ({
		type: types.UPDATE_TASK_ONSUCCESS,
		payload: task,
	}),

	updateTaskOnFail: (error: string) => ({
		type: types.UPDATE_TASK_ONFAIL,
		payload: error,
		error: true,
	}),

	// EDIT
	editTask: (task: TaskUpdateSchema) => ({
		type: types.EDIT_TASK,
		payload: task,
	}),

	editTaskOnSuccess: (task: TaskType) => ({
		type: types.EDIT_TASK_ONSUCCESS,
		payload: task,
	}),

	editTaskOnFail: (error: string) => ({
		type: types.EDIT_TASK_ONFAIL,
		payload: error,
		error: true,
	}),

	// COMPLETE
	completeTask: (task: TaskUpdateSchema) => ({
		type: types.COMPLETE_TASK,
		payload: task,
	}),

	completeTaskOnSuccess: (task: TaskType) => ({
		type: types.COMPLETE_TASK_ONSUCCESS,
		payload: task,
	}),

	completeTaskOnFail: (error: string) => ({
		type: types.COMPLETE_TASK_ONFAIL,
		payload: error,
		error: true,
	}),

	// CREATE
	createTask: (task: TaskUpdateSchema) => ({
		type: types.CREATE_TASK,
		payload: task,
	}),

	createTaskOnSuccess: (task: TaskType) => ({
		type: types.CREATE_TASK_ONSUCCESS,
		payload: task,
	}),

	createTaskOnFail: (error: string) => ({
		type: types.CREATE_TASK_ONFAIL,
		payload: error,
		error: true,
	}),

	// DELETE
	deleteTask: (id: string) => ({
		type: types.DELETE_TASK,
		payload: id,
	}),

	deleteTaskOnSuccess: (id: string) => ({
		type: types.DELETE_TASK_ONSUCCESS,
		payload: id,
	}),

	deleteTaskOnFail: (error: string) => ({
		type: types.DELETE_TASK_ONFAIL,
		payload: error,
		error: true,
	}),
});
