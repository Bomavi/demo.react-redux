import { Reducer } from 'redux';

export interface TasksState {
	taskList: TaskType[];
}

const initialState: TasksState = {
	taskList: [],
};

const tasks: Reducer<TasksState> = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TASKS':
			return {
				...state,
				tasks: action.payload,
			};
		default:
			return state;
	}
};

export { tasks };
