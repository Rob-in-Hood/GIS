import React from 'react';

import {
	WeatherLegendContainer,
	WeatherLegendLabels,
	WeatherLegendScale,
} from './WeatherLegend.styled';

export const WeatherLegend = (props) => {
	return (
		<WeatherLegendContainer>
			<WeatherLegendLabels arrayLength={props.labels.length}>
				{props.labels.map((item) => (
					<li key={item}>{item}</li>
				))}
			</WeatherLegendLabels>
			<WeatherLegendScale
				backgroundImage={props.backgroundImage}
			></WeatherLegendScale>
		</WeatherLegendContainer>
	);
};
