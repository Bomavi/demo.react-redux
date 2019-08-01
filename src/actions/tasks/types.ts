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

export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_IN_PROGRESS = 'SET_IN_PROGRESS';

export const SET_UPDATE_IN_PROGRESS = 'SET_UPDATE_IN_PROGRESS';
export const SET_DELETE_IN_PROGRESS = 'SET_DELETE_IN_PROGRESS';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_ON_SUCCESS = 'FETCH_TASKS_ON_SUCCESS';
export const FETCH_TASKS_ON_FAIL = 'FETCH_TASKS_ON_FAIL';

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_ON_SUCCESS = 'UPDATE_TASK_ON_SUCCESS';
export const UPDATE_TASK_ON_FAIL = 'UPDATE_TASK_ON_FAIL';

export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_ON_SUCCESS = 'CREATE_TASK_ON_SUCCESS';
export const CREATE_TASK_ON_FAIL = 'CREATE_TASK_ON_FAIL';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_ON_SUCCESS = 'DELETE_TASK_ON_SUCCESS';
export const DELETE_TASK_ON_FAIL = 'DELETE_TASK_ON_FAIL';
