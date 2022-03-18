import styled from 'styled-components';

export const WeatherContentContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-content: center;
	padding: 8px 12px;
`;

export const WeatherContentItemContainer = styled.div`
	display: flex;

	& *:first-child {
		margin-right: 6px;
	}
`;
