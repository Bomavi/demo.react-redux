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
export const UPDATE_USER_ONSUCCESS = 'UPDATE_USER_ONSUCCESS';
export const UPDATE_USER_ONFAIL = 'UPDATE_USER_ONFAIL';
