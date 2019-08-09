/* mock imports: common */
import { getInitialState, getUpdatedState } from '__mocks__/state';

/* root imports: common */
import { toggleDrawer } from 'actions/ui';
import * as types from 'actions/ui/types';

/* local imports: common */
import { ui } from '.';

describe('UI reducer', () => {
	const initialState = getInitialState();
	const updatedState = getUpdatedState();

	// test('DEFAULT STATE:', () => {
	// 	const nextState = ui(undefined, {});

	// 	expect(nextState).toEqual(initialState.ui);
	// });

	test(types.TOGGLE_DRAWER, () => {
		const nextState = ui(initialState.ui, toggleDrawer(true));

		expect(nextState.isDrawerOpen).toEqual(updatedState.ui.isDrawerOpen);
	});
});
