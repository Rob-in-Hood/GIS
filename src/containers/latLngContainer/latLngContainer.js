import styled from 'styled-components';

export const LatLngContainer = styled.div`
	width: auto;
	padding: 2px 4px;

	background-color: ${(props) => props.theme.colors.primary};
	opacity: 0.8;

	border: 2px solid ${(props) => props.theme.colors.accent};
	border-radius: 3px;
`;
