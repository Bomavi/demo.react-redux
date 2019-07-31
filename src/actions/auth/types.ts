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
export const AUTHENTICATE_ONSUCCESS = 'AUTHENTICATE_ONSUCCESS';
export const AUTHENTICATE_ONFAIL = 'AUTHENTICATE_ONFAIL';

export const LOGIN = 'LOGIN';
export const LOGIN_ONSUCCESS = 'LOGIN_ONSUCCESS';
export const LOGIN_ONFAIL = 'LOGIN_ONFAIL';

export const REGISTER = 'REGISTER';
export const REGISTER_ONSUCCESS = 'REGISTER_ONSUCCESS';
export const REGISTER_ONFAIL = 'REGISTER_ONFAIL';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_ONSUCCESS = 'LOGOUT_ONSUCCESS';
export const LOGOUT_ONFAIL = 'LOGOUT_ONFAIL';
