/* npm imports: common */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/* root imports: view components */
import { App } from 'views/layouts/App';

/* root imports: common */
import { store } from 'store';

/* start react app */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
