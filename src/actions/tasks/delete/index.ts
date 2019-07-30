/* local imports: common */
import * as types from './../types';

/* initial action */
export interface DeleteTaskAction {
	type: typeof types.DELETE_TASK;
	payload: string;
}

export const deleteTask = (id: string): DeleteTaskAction => ({
	type: types.DELETE_TASK,
	payload: id,
});

/* on success action */
export interface DeleteTaskOnSuccessAction {
	type: typeof types.DELETE_TASK_ONSUCCESS;
	payload: string;
}

export const deleteTaskOnSuccess = (id: string): DeleteTaskOnSuccessAction => ({
	type: types.DELETE_TASK_ONSUCCESS,
	payload: id,
});

/* on fail action */
export interface DeleteTaskOnFailAction {
	type: typeof types.DELETE_TASK_ONFAIL;
	payload: string;
	error: boolean;
}

export const deleteTaskOnFail = (error: string): DeleteTaskOnFailAction => ({
	type: types.DELETE_TASK_ONFAIL,
	payload: error,
	error: true,
});
