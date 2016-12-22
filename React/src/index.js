import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import runtime from 'offline-plugin/runtime';

runtime.install({
	// When an update is ready, tell ServiceWorker to take control immediately:
	onUpdateReady() {
		console.log('update ready');
		runtime.applyUpdate();
	},

	// Reload to get the new version:
	onUpdated() {
		console.log('updated');
		location.reload();
	}
});



import 'react-mdl/extra/material';

import App from './components/App';

import store, { history } from './store';

import './style/index.scss';

const routes = {
	childRoutes: [{
		path: '/',
		component: App,
		childRoutes: [
			require('./containers/Profile')
		]
	}]
};


render(
	<Provider store={store}>
		<Router
			history={history}
			routes={routes}
			/>
	</Provider>,
	document.querySelector('#root')
);
