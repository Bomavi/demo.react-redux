/* npm imports: common */
import { Reducer } from 'redux';

/* root imports: common */
import * as types from 'actions/tasks/types';

export type TasksState = Readonly<{
	taskList: TaskType[];
	search: TasksSearchType;
	isFetching: boolean;
	inProgress: boolean;
}>;

const initialState: TasksState = {
	taskList: [],
	search: {
		q: '',
	},
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

		case types.SET_ISFETCHING: {
			return {
				...state,
				isFetching: action.payload,
			};
		}

		case types.SET_INPROGRESS: {
			return {
				...state,
				inProgress: action.payload,
			};
		}

		case types.SET_UPDATE_INPROGRESS: {
			const { id, inProgress } = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t =>
					t._id === id ? { ...t, updateInProgress: inProgress } : t
				),
			};
		}

		case types.SET_DELETE_INPROGRESS: {
			const { id, inProgress } = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t =>
					t._id === id ? { ...t, deleteInProgress: inProgress } : t
				),
			};
		}

		case types.FETCH_TASKS_ONSUCCESS: {
			return {
				...state,
				taskList: action.payload,
			};
		}

		case types.CREATE_TASK_ONSUCCESS: {
			return {
				...state,
				taskList: [...state.taskList, action.payload],
			};
		}

		case types.UPDATE_TASK_ONSUCCESS: {
			const task = action.payload;
			return {
				...state,
				taskList: state.taskList.map(t => (t._id === task._id ? task : t)),
			};
		}

		case types.DELETE_TASK_ONSUCCESS: {
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
