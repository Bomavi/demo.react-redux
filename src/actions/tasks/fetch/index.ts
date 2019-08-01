/* local imports: common */
import * as types from './../types';

/* initial action */
export interface FetchTasksAction {
	type: typeof types.FETCH_TASKS;
}

export const fetchTasks = (): FetchTasksAction => ({
	type: types.FETCH_TASKS,
});

/* on success action */
export interface FetchTasksOnSuccessAction {
	type: typeof types.FETCH_TASKS_ON_SUCCESS;
	payload: TaskType[];
}

export const fetchTasksOnSuccess = (tasks: TaskType[]): FetchTasksOnSuccessAction => ({
	type: types.FETCH_TASKS_ON_SUCCESS,
	payload: tasks,
});

/* on fail action */
export interface FetchTasksOnFailAction {
	type: typeof types.FETCH_TASKS_ON_FAIL;
	payload: string;
	error: boolean;
}

export const fetchTasksOnFail = (error: string): FetchTasksOnFailAction => ({
	type: types.FETCH_TASKS_ON_FAIL,
	payload: error,
	error: true,
});
