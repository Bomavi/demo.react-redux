/* local imports: common */
import * as types from './../types';

/* IN PROGRESS ACTION */
export interface SetThemeInProgressAction {
	type: typeof types.SET_THEME_IN_PROGRESS;
	payload: boolean;
}

export const setThemeInProgress = (inProgress: boolean): SetThemeInProgressAction => ({
	type: types.SET_THEME_IN_PROGRESS,
	payload: inProgress,
});
