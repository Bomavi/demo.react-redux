/* local imports: common */
import * as types from './../types';

/* initial action */
export interface AuthenticateAction {
	type: typeof types.AUTHENTICATE;
}

export const authenticate = (): AuthenticateAction => ({
	type: types.AUTHENTICATE,
});

/* on success action */
export interface AuthenticateOnSuccessAction {
	type: typeof types.AUTHENTICATE_ONSUCCESS;
	payload: UserType;
}

export const authenticateOnSuccess = (
	user: UserType
): AuthenticateOnSuccessAction => ({
	type: types.AUTHENTICATE_ONSUCCESS,
	payload: user,
});

/* on fail action */
export interface AuthenticateOnFailAction {
	type: typeof types.AUTHENTICATE_ONFAIL;
	payload: string;
	error: boolean;
}

export const authenticateOnFail = (
	error: string
): AuthenticateOnFailAction => ({
	type: types.AUTHENTICATE_ONFAIL,
	payload: error,
	error: true,
});
