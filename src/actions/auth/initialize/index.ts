/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SetIsInitializedAction {
	type: typeof types.SET_IS_INITIALIZED;
	payload: boolean;
}

export const setIsInitialized = (isInitialized: boolean): SetIsInitializedAction => ({
	type: types.SET_IS_INITIALIZED,
	payload: isInitialized,
});
