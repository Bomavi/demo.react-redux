/* npm imports: common */
import { Reducer } from 'redux';

/* root imports: common */
import * as types from 'actions/ui/types';

export type UIState = Readonly<{
	isDrawerOpen: boolean;
}>;

export const initialState: UIState = {
	isDrawerOpen: false,
};

export const ui: Reducer<UIState, types.UIActionTypes> = (
	state = initialState,
	action
): UIState => {
	switch (action.type) {
		case types.TOGGLE_DRAWER: {
			const isOpen = action.payload;
			return {
				...state,
				isDrawerOpen: isOpen && isOpen !== null ? isOpen : !state.isDrawerOpen,
			};
		}

		default:
			return state;
	}
};
