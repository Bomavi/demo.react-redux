/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SortTasksAction {
	type: typeof types.SORT_TASKS;
	payload: SortKey;
}

export const sortTasks = (sort: SortKey): SortTasksAction => ({
	type: types.SORT_TASKS,
	payload: sort,
});
