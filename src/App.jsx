import React from 'react';

import Theme from '@core/theme/theme';

import { AppContainer } from '@containers/appContainer/AppContainer';
import { Header } from '@components/smart/header/Header';
import { Map } from '@components/smart/map/Map';
import { Footer } from '@components/smart/footer/Footer';

const App = () => {
	return (
		<Theme>
			<AppContainer>
				<Header />
				<Map />
				<Footer />
			</AppContainer>
		</Theme>
	);
};

export default App;
