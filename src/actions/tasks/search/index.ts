/* local imports: common */
import * as types from './../types';

/* initial action */
export interface SearchTasksAction {
	type: typeof types.SEARCH_TASKS;
	payload: string;
}

export const searchTasks = (search: string): SearchTasksAction => ({
	type: types.SEARCH_TASKS,
	payload: search,
});
