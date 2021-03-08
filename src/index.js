import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter.js';
import { AppProvider } from './state/app.js';

ReactDOM.render(
	<AppProvider>
		<AppRouter></AppRouter>
	</AppProvider>,
	document.getElementById('root')
);
