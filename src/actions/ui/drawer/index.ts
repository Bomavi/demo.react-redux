/* local imports: common */
import * as types from './../types';

/* TOGGLE DRAWER */
export interface ToggleDrawerAction {
	type: typeof types.TOGGLE_DRAWER;
	payload?: boolean | null;
}

export const toggleDrawer = (isOpen: boolean | null = null): ToggleDrawerAction => ({
	type: types.TOGGLE_DRAWER,
	payload: isOpen,
});
