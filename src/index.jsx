import React from 'react';
import ReactDOM from 'react-dom';

import { store } from '@core/store/store';
import { Provider } from 'react-redux';

import '../public/index.css';

import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
