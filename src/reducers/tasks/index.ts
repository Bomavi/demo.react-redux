/* npm imports: common */
import { Reducer } from 'redux';

/* root imports: common */
import * as types from 'actions/tasks/types';

export type TasksState = Readonly<{
	taskList: TaskType[];
	search: TasksSearchType;
	sort: SortKey;
	isFetching: boolean;
	inProgress: boolean;
}>;

const initialState: TasksState = {
	taskList: [],
	search: {
		q: '',
	},
	sort: 'desc',
	isFetching: false,
	inProgress: false,
};

const tasks: Reducer<TasksState, types.TaskActionTypes> = (
	state = initialState,
	action
): TasksState => {
	switch (action.type) {
		case types.SEARCH_TASKS: {
			return {
				...state,
				search: {
					q: action.payload,
				},
			};
		}

		case types.SORT_TASKS: {
			return {
				...state,
				sort: action.payload,
			};
		}

		case types.SET_IS_FETCHING: {
			return {
				...state,
				isFetching: action.payload,
			};
		}

		case types.SET_IN_PROGRESS: {
			return {
				...state,
				inProgress: action.payload,
			};
		}

		case types.SET_UPDATE_IN_PROGRESS: {
			const { id, inProgress } = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t =>
					t._id === id ? { ...t, updateInProgress: inProgress } : t
				),
			};
		}

		case types.SET_DELETE_IN_PROGRESS: {
			const { id, inProgress } = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t =>
					t._id === id ? { ...t, deleteInProgress: inProgress } : t
				),
			};
		}

		case types.FETCH_TASKS_ON_SUCCESS: {
			return {
				...state,
				taskList: action.payload,
			};
		}

		case types.CREATE_TASK_ON_SUCCESS: {
			return {
				...state,
				taskList: [...state.taskList, action.payload],
			};
		}

		case types.UPDATE_TASK_ON_SUCCESS: {
			const task = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t => (t._id === task._id ? task : t)),
			};
		}

		case types.DELETE_TASK_ON_SUCCESS: {
			const id = action.payload;
			return {
				...state,
				taskList: state.taskList.filter(t => t._id !== id),
			};
		}

		default:
			return state;
	}
};

export { tasks };
