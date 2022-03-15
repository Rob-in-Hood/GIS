import React from 'react';

import Theme from '@core/theme/theme';

import { AppContainer } from './App.styled';
import { Header } from '@components/header/Header';
import { Map } from '@components/singleUseComponents/map/Map';
import { Footer } from '@components/footer/Footer';

const App = () => {
	return (
		<Theme>
			<AppContainer>
				<Header />
				<Map />
				<div
					style={{ width: '100%', height: '100%', position: 'absolute' }}
				></div>
				<Footer />
			</AppContainer>
		</Theme>
	);
};

export default App;
