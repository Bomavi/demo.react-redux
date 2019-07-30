/* local imports: common */
import * as types from './../types';

/* TOGGLE DRAWER */
export interface ToggleDrawerAction {
	type: typeof types.TOGGLE_DRAWER;
}

export const toggleDrawer = (): ToggleDrawerAction => ({
	type: types.TOGGLE_DRAWER,
});
