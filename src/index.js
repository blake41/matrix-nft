import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter.js';
import { AppProvider } from './state/app.js';
import AppContainer from './AppContainer.js'
import DataLoader from './DataLoader.js'
ReactDOM.render(
	<AppProvider>
		<AppContainer >
			<DataLoader>
				<AppRouter>
				</AppRouter>
			</DataLoader>
		</AppContainer>

	</AppProvider>,
	document.getElementById('root')
);
