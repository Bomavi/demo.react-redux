/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SwitchThemeAction {
	type: typeof types.SWITCH_THEME;
}

export const switchTheme = (): SwitchThemeAction => ({
	type: types.SWITCH_THEME,
});

/* on success action */
export interface SwitchThemeOnSuccessAction {
	type: typeof types.SWITCH_THEME_ONSUCCESS;
	payload: MUIThemeType;
}

export const switchThemeOnSuccess = (
	theme: MUIThemeType
): SwitchThemeOnSuccessAction => ({
	type: types.SWITCH_THEME_ONSUCCESS,
	payload: theme,
});

/* on fail action */
export interface SwitchThemeOnFailAction {
	type: typeof types.SWITCH_THEME_ONFAIL;
	payload: string;
	error: boolean;
}

export const switchThemeOnFail = (error: string): SwitchThemeOnFailAction => ({
	type: types.SWITCH_THEME_ONFAIL,
	payload: error,
	error: true,
});
