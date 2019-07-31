/* npm imports: common */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PublicComponent = () => <h1>Public page</h1>;

export const Public: React.FC = () => (
	<BrowserRouter>
		<Route exact path="/public" component={PublicComponent} />
	</BrowserRouter>
);
