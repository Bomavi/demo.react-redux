/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SwitchThemeAction {
	type: typeof types.SWITCH_THEME;
	payload: MUIThemeType;
}

export const switchTheme = (theme: MUIThemeType): SwitchThemeAction => ({
	type: types.SWITCH_THEME,
	payload: theme,
});
