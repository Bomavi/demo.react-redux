/* npm imports: common */
import { createSelector, Selector } from 'reselect';

/* root imports: common */
import { State } from 'reducers';

const tasksSelector = (state: State) => state.tasks.taskList;

export const getSortedByDateTasks: Selector<State, TaskType[]> = createSelector(
	[tasksSelector],
	tasks =>
		tasks.sort(
			(a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
		)
);

export const getSortedTasks: Selector<State, TaskType[]> = createSelector(
	[getSortedByDateTasks],
	tasks => tasks.sort((a, b) => Number(a.completed) - Number(b.completed))
);

export const getTasksLenth: Selector<State, number> = createSelector(
	tasksSelector,
	tasks => tasks.length
);

export const getTasksIsEmpty: Selector<State, boolean> = createSelector(
	getTasksLenth,
	tasksLength => tasksLength === 0
);
