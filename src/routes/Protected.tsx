/* npm imports: common */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* root imports: view components */
import { Home } from 'features/Home';

export const Protected: React.FC = () => (
	<BrowserRouter>
		<Route exact path="/" component={Home} />
	</BrowserRouter>
);
