import styled from 'styled-components';

export const WeatherLegendsContainer = styled.div`
	position: absolute;
	z-index: 2;
	display: flex;

	top: ${(props) => props.theme.fixedHeights.header + 6}px;
	right: 6px;
`;

export const WeatherLegendContainer = styled.div`
	position: relative;
	display: flex;
	align-self: stretch;

	height: 41vmin;
	width: auto;
`;

export const WeatherLegendScale = styled.div`
	float: right;
	width: 2.4vmin;
	align-self: stretch;

	border-radius: 3px;
	border: 2px solid rgba(10, 10, 10, 0.8) !important;
	opacity: 0.7;
	background-image: ${(props) => props.backgroundImage};
`;

export const WeatherLegendLabels = styled.ul`
	float: left;
	text-align: center;
	align-self: stretch;

	padding: 0 0 0 1.3vmin;
	margin: auto 0.9vmin auto auto;

	list-style: none;

	& li {
		display: flex;
		align-items: center;
		justify-content: end;

		height: calc(41vmin / ${(props) => props.arrayLength});
	}
`;
