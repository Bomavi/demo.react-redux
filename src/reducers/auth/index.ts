import { Reducer } from 'redux';

export interface AuthState {
	user: UserType | null;
}

const initialState: AuthState = {
	user: null,
};

const auth: Reducer<AuthState> = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export { auth };
