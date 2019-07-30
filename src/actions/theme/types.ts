/* local imports: common */
import {
	SwitchThemeAction,
	SwitchThemeOnSuccessAction,
	SwitchThemeOnFailAction,
	ChangeSelectedThemeTypeAction,
} from './index';

export type ThemeActionTypes =
	| SwitchThemeAction
	| SwitchThemeOnSuccessAction
	| SwitchThemeOnFailAction
	| ChangeSelectedThemeTypeAction;

export const SWITCH_THEME = 'SWITCH_THEME';
export const SWITCH_THEME_ONSUCCESS = 'SWITCH_THEME_ONSUCCESS';
export const SWITCH_THEME_ONFAIL = 'SWITCH_THEME_ONFAIL';

export const CHANGE_SELECTED_THEME_TYPE = 'CHANGE_SELECTED_THEME_TYPE';
