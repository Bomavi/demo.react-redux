/* npm imports: common */
import { createSelector, Selector } from 'reselect';

/* npm imports: material-ui/core */
import { Theme } from '@material-ui/core/styles';

/* root imports: common */
import { State } from 'reducers';
import { history } from 'config/history';
import { lightTheme, darkTheme } from 'utils/themes';

// const { pathname } = history.location;

const authSelector = (state: State) => state.auth;
const userSelector = (state: State) => state.auth.user;
const themeSelector = (state: State) => state.auth.theme.selectedThemeType;
const pathnameSelector = () => history.location.pathname;

export const getIsAuthenticated: Selector<State, boolean> = createSelector(
	userSelector,
	user => !!user
);

export const getIsInitialized: Selector<State, boolean> = createSelector(
	authSelector,
	auth => auth.isInitialized
);

export const getAccessibleOnlyForAuthorized: Selector<State, boolean> = createSelector(
	[getIsInitialized, getIsAuthenticated],
	(isInitialized, isAuthenticated) => isInitialized && isAuthenticated
);

export const getAccessibleOnlyForUnauthorized: Selector<State, boolean> = createSelector(
	[getIsInitialized, getIsAuthenticated],
	(isInitialized, isAuthenticated) => isInitialized && !isAuthenticated
);

export const getNotAccessibleForAuthorized: Selector<State, boolean> = createSelector(
	[getIsInitialized, getIsAuthenticated, pathnameSelector],
	(isInitialized, isAuthenticated, pathname) =>
		!isInitialized && !isAuthenticated && pathname === '/login'
);

export const getNotAccessibleForUnauthorized: Selector<State, boolean> = createSelector(
	[getIsInitialized, getIsAuthenticated, pathnameSelector],
	(isInitialized, isAuthenticated, pathname) =>
		isInitialized && !isAuthenticated && pathname !== '/login'
);

export const getSelectedTheme: Selector<State, Theme> = createSelector(
	themeSelector,
	theme => {
		switch (theme) {
			case 'light':
				return lightTheme;

			case 'dark':
				return darkTheme;

			default:
				return lightTheme;
		}
	}
);

export const getThemeNameToSwitch: Selector<State, MUIThemeType> = createSelector(
	themeSelector,
	theme => {
		switch (theme) {
			case 'light':
				return 'dark';

			case 'dark':
				return 'light';

			default:
				return 'light';
		}
	}
);
