/* local imports: common */
import * as types from './../types';

/* IS FETCHING ACTION */
export interface SetIsFetchingAction {
	type: typeof types.SET_ISFETCHING;
	payload: boolean;
}

export const setIsFetching = (isFetching: boolean): SetIsFetchingAction => ({
	type: types.SET_ISFETCHING,
	payload: isFetching,
});

/* IN PROGRESS ACTION */
export interface SetInProgressAction {
	type: typeof types.SET_INPROGRESS;
	payload: boolean;
}

export const setInProgress = (inProgress: boolean): SetInProgressAction => ({
	type: types.SET_INPROGRESS,
	payload: inProgress,
});

/* UPDATE IN PROGRESS ACTION */
export interface SetUpdateInProgressAction {
	type: typeof types.SET_UPDATE_INPROGRESS;
	payload: {
		id: string;
		inProgress: boolean;
	};
}

export const setUpdateInProgress = (
	id: string,
	inProgress: boolean
): SetUpdateInProgressAction => ({
	type: types.SET_UPDATE_INPROGRESS,
	payload: {
		id,
		inProgress,
	},
});

/* DELETE IN PROGRESS ACTION */
export interface SetDeleteInProgressAction {
	type: typeof types.SET_DELETE_INPROGRESS;
	payload: {
		id: string;
		inProgress: boolean;
	};
}

export const setDeleteInProgress = (
	id: string,
	inProgress: boolean
): SetDeleteInProgressAction => ({
	type: types.SET_DELETE_INPROGRESS,
	payload: {
		id,
		inProgress,
	},
});
