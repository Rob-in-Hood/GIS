import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
	colors: {
		primary: `white`,
		secondary: `#e2dce7`,
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
		header: 60,
		footer: 60,
		accordionBtn: 30,
	},
	fixedWidths: {
		toolsPanel: 400,
		layersPanel: 400,
	},
	transitionDelay: 0.7,
	get notCompletedBackground() {
		return `repeating-linear-gradient(
			135deg,
			${this.colors.secondary},
			${this.colors.secondary} 6px,
			transparent 6px,
			transparent 16px
		)`;
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
