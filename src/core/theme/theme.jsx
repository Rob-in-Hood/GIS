import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
	colors: {
		primary: `white`,
		secondary: `#E5DEEC`,
		accent: `black`,
	},
	fonts: ['sans-serif', 'Jura'],
	fontSizes: {
		small: '14px',
		medium: '16px',
		large: '18px',
	},
	opacity: '0.8',
	fixedHeights: {
		header: '60',
		footer: '60',
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
