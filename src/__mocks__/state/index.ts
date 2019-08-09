/* mock imports: common */
import { user, tasks } from '__mocks__/data';

/* root imports: common */
import { State } from 'reducers';

export const getInitialState = (): State => {
	return {
		auth: {
			isInitialized: false,
			inProgress: false,
			user: null,
			theme: {
				selectedThemeType: 'light',
				inProgress: false,
			},
		},
		tasks: {
			isFetching: false,
			inProgress: false,
			search: {
				q: '',
			},
			sort: 'desc',
			taskList: [],
		},
		ui: {
			isDrawerOpen: false,
		},
	};
};

export const getUpdatedState = (): State => {
	return {
		auth: {
			isInitialized: true,
			inProgress: true,
			user,
			theme: {
				selectedThemeType: 'light',
				inProgress: false,
			},
		},
		tasks: {
			isFetching: true,
			inProgress: true,
			search: {
				q: 'test',
			},
			sort: 'desc',
			taskList: tasks,
		},
		ui: {
			isDrawerOpen: true,
		},
	};
};
