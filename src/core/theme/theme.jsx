import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
	colors: {
		primary: `#fff`,
		secondary: `#e2dce7`,
		accent: `#000`,
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
	tooltipArrowSize: '5px',
	get notCompletedBackground() {
		return `repeating-linear-gradient(
			135deg,
			${this.colors.secondary},
			${this.colors.secondary} 5px,
			transparent 5px,
			transparent 14px
		)`;
	},
	weatherBackground: {
		temp: `linear-gradient(0deg, rgb(0, 0, 173) 0%, 
		rgb(0, 0, 220) 6.25%, rgb(0, 19, 254) 12.5%, 
		rgb(0, 89, 254) 18.75%, rgb(0, 163, 254) 25%, 
		rgb(0, 233, 254) 31.25%, rgb(39, 253, 215) 37.5%, 
		rgb(95, 253, 159) 43.75%, rgb(155, 254, 99) 50%, 
		rgb(211, 254, 43) 56.25%, rgb(254, 243, 40) 62.5%, 
		rgb(254, 187, 0) 68.75%, rgb(254, 131, 0) 75%, 
		rgb(254, 71, 0) 81.25%, rgb(254, 15, 0) 87.5%, 
		rgb(220, 0, 0) 93.75%, rgb(173, 0, 0) 100%)`,
		wind: `linear-gradient(0deg, rgb(0, 0, 127) 0%, 
		rgb(0, 0, 177) 5.95238%, rgb(0, 0, 230) 11.7347%, 
		rgb(0, 34, 254) 17.6871%, rgb(0, 114, 254) 23.4694%, 
		rgb(0, 168, 254) 29.4218%, rgb(0, 233, 254) 35.3742%, 
		rgb(39, 253, 215) 41.1565%, rgb(95, 253, 159) 47.1088%, 
		rgb(155, 254, 99) 53.0612%, rgb(219, 254, 35) 59.3537%, 
		rgb(254, 231, 0) 64.7959%, rgb(254, 187, 0) 70.5782%, 
		rgb(254, 123, 0) 76.5306%, rgb(254, 75, 0) 82.483%, 
		rgb(254, 15, 0) 88.2653%, rgb(213, 0, 0) 94.2177%, 
		rgb(130, 0, 0) 100%)`,
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
