/* local imports: common */
import {
	SwitchThemeAction,
	ChangeSelectedThemeTypeAction,
	SetThemeInProgressAction,
} from './index';

export type ThemeActionTypes =
	| SwitchThemeAction
	| ChangeSelectedThemeTypeAction
	| SetThemeInProgressAction;

export const SET_THEME_IN_PROGRESS = 'SET_THEME_IN_PROGRESS';
export const SWITCH_THEME = 'SWITCH_THEME';
export const CHANGE_SELECTED_THEME_TYPE = 'CHANGE_SELECTED_THEME_TYPE';
