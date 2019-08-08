/* mock imports: common */
import { tasks } from '__mocks__/data';

/* root imports: common */
import { State } from 'reducers';

export const getState = (): State => {
	return {
		auth: {
			isInitialized: false,
			inProgress: false,
			user: {
				_id: '1',
				username: 'JognDoe',
				theme: 'light',
				createdAt: 'some date',
				updatedAt: 'some date',
			},
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
			taskList: tasks,
		},
		ui: {
			isDrawerOpen: false,
		},
	};
};
