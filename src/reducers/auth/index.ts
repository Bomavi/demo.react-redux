/* npm imports: common */
import { Reducer } from 'redux';

/* root imports: common */
import { AuthActionTypes } from 'actions/auth/types';
import * as authTypes from 'actions/auth/types';
import { UserActionTypes } from 'actions/user/types';
import * as userTypes from 'actions/user/types';
import { ThemeActionTypes } from 'actions/theme/types';
import * as themeTypes from 'actions/theme/types';

const types = {
	...authTypes,
	...userTypes,
	...themeTypes,
};

type ActionTypes = AuthActionTypes | UserActionTypes | ThemeActionTypes;

export type ThemeType = Readonly<{
	selectedThemeType: MUIThemeType;
	inProgress: boolean;
}>;

export type AuthState = Readonly<{
	user: UserType | null;
	theme: ThemeType;
	isInitialized: boolean;
	inProgress: boolean;
}>;

export const initialState: AuthState = {
	user: null,
	isInitialized: false,
	theme: {
		selectedThemeType: 'light',
		inProgress: false,
	},
	inProgress: false,
};

export const auth: Reducer<AuthState, ActionTypes> = (
	state = initialState,
	action
): AuthState => {
	switch (action.type) {
		case types.SET_IN_PROGRESS: {
			return {
				...state,
				inProgress: action.payload,
			};
		}

		case types.SET_IS_INITIALIZED: {
			return {
				...state,
				isInitialized: action.payload,
			};
		}

		case types.AUTHENTICATE_ON_SUCCESS:
		case types.LOGIN_ON_SUCCESS:
		case types.REGISTER_ON_SUCCESS:
		case types.UPDATE_USER_ON_SUCCESS: {
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
				theme: {
					...state.theme,
					selectedThemeType: action.payload.theme,
				},
			};
		}

		case types.LOGOUT_ON_SUCCESS: {
			return {
				...state,
				user: null,
			};
		}

		case types.SET_THEME_IN_PROGRESS: {
			return {
				...state,
				theme: {
					...state.theme,
					inProgress: action.payload,
				},
			};
		}

		case types.CHANGE_SELECTED_THEME_TYPE: {
			return {
				...state,
				theme: {
					...state.theme,
					selectedThemeType: action.payload,
				},
			};
		}

		default:
			return state;
	}
};
