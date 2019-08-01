/* local imports: common */
import {
	UpdateUserAction,
	UpdateUserOnSuccessAction,
	UpdateUserOnFailAction,
} from './index';

export type UserActionTypes =
	| UpdateUserAction
	| UpdateUserOnSuccessAction
	| UpdateUserOnFailAction;

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ON_SUCCESS = 'UPDATE_USER_ON_SUCCESS';
export const UPDATE_USER_ON_FAIL = 'UPDATE_USER_ON_FAIL';
