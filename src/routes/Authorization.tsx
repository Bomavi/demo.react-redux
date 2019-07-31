/* npm imports: common */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* root imports: view components */
import { Login } from 'features/Login';

export const Authorization: React.FC = () => (
	<BrowserRouter>
		<Route exact path="/login" component={Login} />
	</BrowserRouter>
);
