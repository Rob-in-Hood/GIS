import styled from 'styled-components';

export const MapsContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	align-content: space-between;
	padding: 8px;

	& *:nth-child(-n + 4) {
		margin-bottom: 12px;
	}
`;
