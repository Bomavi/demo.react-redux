/* local imports: common */
import {
	SearchTasksAction,
	SetIsFetchingAction,
	SetInProgressAction,
	SetUpdateInProgressAction,
	SetDeleteInProgressAction,
	FetchTasksAction,
	FetchTasksOnSuccessAction,
	FetchTasksOnFailAction,
	UpdateTaskAction,
	UpdateTaskOnSuccessAction,
	UpdateTaskOnFailAction,
	CreateTaskAction,
	CreateTaskOnSuccessAction,
	CreateTaskOnFailAction,
	DeleteTaskAction,
	DeleteTaskOnSuccessAction,
	DeleteTaskOnFailAction,
} from './index';

export type TaskActionTypes =
	| SearchTasksAction
	| SetIsFetchingAction
	| SetInProgressAction
	| SetUpdateInProgressAction
	| SetDeleteInProgressAction
	| FetchTasksAction
	| FetchTasksOnSuccessAction
	| FetchTasksOnFailAction
	| UpdateTaskAction
	| UpdateTaskOnSuccessAction
	| UpdateTaskOnFailAction
	| CreateTaskAction
	| CreateTaskOnSuccessAction
	| CreateTaskOnFailAction
	| DeleteTaskAction
	| DeleteTaskOnSuccessAction
	| DeleteTaskOnFailAction;

export const SEARCH_TASKS = 'SEARCH_TASKS';

export const SET_ISFETCHING = 'SET_ISFETCHING';
export const SET_INPROGRESS = 'SET_INPROGRESS';

export const SET_UPDATE_INPROGRESS = 'SET_UPDATE_INPROGRESS';
export const SET_DELETE_INPROGRESS = 'SET_DELETE_INPROGRESS';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_ONSUCCESS = 'FETCH_TASKS_ONSUCCESS';
export const FETCH_TASKS_ONFAIL = 'FETCH_TASKS_ONFAIL';

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_ONSUCCESS = 'UPDATE_TASK_ONSUCCESS';
export const UPDATE_TASK_ONFAIL = 'UPDATE_TASK_ONFAIL';

export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_ONSUCCESS = 'CREATE_TASK_ONSUCCESS';
export const CREATE_TASK_ONFAIL = 'CREATE_TASK_ONFAIL';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_ONSUCCESS = 'DELETE_TASK_ONSUCCESS';
export const DELETE_TASK_ONFAIL = 'DELETE_TASK_ONFAIL';
