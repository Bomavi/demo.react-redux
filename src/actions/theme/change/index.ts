/* local imports: common */
import * as types from './../types';

/* initial action */
export interface ChangeSelectedThemeTypeAction {
	type: typeof types.CHANGE_SELECTED_THEME_TYPE;
	payload: MUIThemeType;
}

export const changeSelectedThemeType = (
	theme: MUIThemeType
): ChangeSelectedThemeTypeAction => ({
	type: types.CHANGE_SELECTED_THEME_TYPE,
	payload: theme,
});
