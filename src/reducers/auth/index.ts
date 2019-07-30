/* npm imports: common */
import { Reducer } from 'redux';

/* root imports: common */
import { themeValidator } from 'utils/helpers';
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

export interface AuthState {
	user: UserType | null;
	selectedThemeType: MUIThemeType;
	isInitialized: boolean;
	inProgress: boolean;
}

export const initialState: AuthState = {
	user: null,
	selectedThemeType: 'light',
	isInitialized: false,
	inProgress: false,
};

export const auth: Reducer<AuthState, ActionTypes> = (
	state = initialState,
	action
): AuthState => {
	switch (action.type) {
		case types.SET_INPROGRESS: {
			return {
				...state,
				inProgress: action.payload,
			};
		}

		case types.SET_ISINITIALIZED: {
			const localThemeType = localStorage.getItem('theme');
			let selectedThemeType: MUIThemeType;

			if (localThemeType && themeValidator(localThemeType)) {
				selectedThemeType = localThemeType as MUIThemeType;
			} else {
				selectedThemeType = state.selectedThemeType;
				localStorage.setItem('theme', state.selectedThemeType);
			}

			return {
				...state,
				selectedThemeType,
				isInitialized: action.payload,
			};
		}

		case types.AUTHENTICATE_ONSUCCESS:
		case types.LOGIN_ONSUCCESS:
		case types.REGISTER_ONSUCCESS: {
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
				selectedThemeType: action.payload.theme,
			};
		}

		case types.LOGOUT_ONSUCCESS: {
			return {
				...state,
				user: null,
			};
		}

		case types.UPDATE_USER_ONSUCCESS: {
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
				selectedThemeType: action.payload.theme,
			};
		}

		case types.SWITCH_THEME_ONSUCCESS:
		case types.CHANGE_SELECTED_THEME_TYPE: {
			return {
				...state,
				selectedThemeType: action.payload,
			};
		}

		default:
			return state;
	}
};
