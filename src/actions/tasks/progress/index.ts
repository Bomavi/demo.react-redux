/* local imports: common */
import * as types from './../types';

/* IS FETCHING ACTION */
export interface SetIsFetchingAction {
	type: typeof types.SET_IS_FETCHING;
	payload: boolean;
}

export const setIsFetching = (isFetching: boolean): SetIsFetchingAction => ({
	type: types.SET_IS_FETCHING,
	payload: isFetching,
});

/* IN PROGRESS ACTION */
export interface SetInProgressAction {
	type: typeof types.SET_IN_PROGRESS;
	payload: boolean;
}

export const setInProgress = (inProgress: boolean): SetInProgressAction => ({
	type: types.SET_IN_PROGRESS,
	payload: inProgress,
});

/* UPDATE IN PROGRESS ACTION */
export interface SetUpdateInProgressAction {
	type: typeof types.SET_UPDATE_IN_PROGRESS;
	payload: {
		id: string;
		inProgress: boolean;
	};
}

export const setUpdateInProgress = (
	id: string,
	inProgress: boolean
): SetUpdateInProgressAction => ({
	type: types.SET_UPDATE_IN_PROGRESS,
	payload: {
		id,
		inProgress,
	},
});

/* DELETE IN PROGRESS ACTION */
export interface SetDeleteInProgressAction {
	type: typeof types.SET_DELETE_IN_PROGRESS;
	payload: {
		id: string;
		inProgress: boolean;
	};
}

export const setDeleteInProgress = (
	id: string,
	inProgress: boolean
): SetDeleteInProgressAction => ({
	type: types.SET_DELETE_IN_PROGRESS,
	payload: {
		id,
		inProgress,
	},
});
