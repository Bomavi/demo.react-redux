/* npm imports: common */
import { createSelector, Selector } from 'reselect';

/* root imports: common */
import { State } from 'reducers';

const tasksSelector = (state: State) => state.tasks.taskList;
const sortKeySelector = (state: State) => state.tasks.sort;

export const getSortedByDateTasks: Selector<State, TaskType[]> = createSelector(
	[tasksSelector, sortKeySelector],
	(tasks, sortKey) =>
		tasks.sort((a, b) => {
			const aDate = Number(new Date(a.createdAt));
			const bDate = Number(new Date(b.createdAt));
			return sortKey === 'desc' ? bDate - aDate : aDate - bDate;
		})
);

export const getSortedTasks: Selector<State, TaskType[]> = createSelector(
	[getSortedByDateTasks, sortKeySelector],
	(tasks, sortKey) =>
		sortKey ? tasks.sort((a, b) => Number(a.completed) - Number(b.completed)) : tasks
);

export const getTasksLenth: Selector<State, number> = createSelector(
	tasksSelector,
	tasks => tasks.length
);

export const getTasksIsEmpty: Selector<State, boolean> = createSelector(
	getTasksLenth,
	tasksLength => tasksLength === 0
);
