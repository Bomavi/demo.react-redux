/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SetInProgressAction {
	type: typeof types.SET_INPROGRESS;
	payload: boolean;
}

export const setInProgress = (inProgress: boolean): SetInProgressAction => ({
	type: types.SET_INPROGRESS,
	payload: inProgress,
});
