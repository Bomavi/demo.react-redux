/* local imports: common */
import {
	SetIsInitializedAction,
	SetInProgressAction,
	AuthenticateAction,
	AuthenticateOnSuccessAction,
	AuthenticateOnFailAction,
	LoginAction,
	LoginOnSuccessAction,
	LoginOnFailAction,
	LogoutAction,
	LogoutOnSuccessAction,
	LogoutOnFailAction,
	RegisterAction,
	RegisterOnSuccessAction,
	RegisterOnFailAction,
} from './index';

export type AuthActionTypes =
	| SetIsInitializedAction
	| SetInProgressAction
	| AuthenticateAction
	| AuthenticateOnSuccessAction
	| AuthenticateOnFailAction
	| LoginAction
	| LoginOnSuccessAction
	| LoginOnFailAction
	| LogoutAction
	| LogoutOnSuccessAction
	| LogoutOnFailAction
	| RegisterAction
	| RegisterOnSuccessAction
	| RegisterOnFailAction;

export const SET_IN_PROGRESS = 'SET_IN_PROGRESS';
export const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_ON_SUCCESS = 'AUTHENTICATE_ON_SUCCESS';
export const AUTHENTICATE_ON_FAIL = 'AUTHENTICATE_ON_FAIL';

export const LOGIN = 'LOGIN';
export const LOGIN_ON_SUCCESS = 'LOGIN_ON_SUCCESS';
export const LOGIN_ON_FAIL = 'LOGIN_ON_FAIL';

export const REGISTER = 'REGISTER';
export const REGISTER_ON_SUCCESS = 'REGISTER_ON_SUCCESS';
export const REGISTER_ON_FAIL = 'REGISTER_ON_FAIL';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_ON_SUCCESS = 'LOGOUT_ON_SUCCESS';
export const LOGOUT_ON_FAIL = 'LOGOUT_ON_FAIL';
