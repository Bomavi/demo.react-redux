/* local imports: common */
import * as types from './../types';

/* initial action */
export interface RegisterAction {
	type: typeof types.REGISTER;
	payload: RegisterType;
}

export const register = (userData: RegisterType): RegisterAction => ({
	type: types.REGISTER,
	payload: userData,
});

/* on success action */
export interface RegisterOnSuccessAction {
	type: typeof types.REGISTER_ONSUCCESS;
	payload: UserType;
}

export const registerOnSuccess = (user: UserType): RegisterOnSuccessAction => ({
	type: types.REGISTER_ONSUCCESS,
	payload: user,
});

/* on fail action */
export interface RegisterOnFailAction {
	type: typeof types.REGISTER_ONFAIL;
	payload: string;
	error: boolean;
}

export const registerOnFail = (error: string): RegisterOnFailAction => ({
	type: types.REGISTER_ONFAIL,
	payload: error,
	error: true,
});
