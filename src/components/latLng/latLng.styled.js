import styled from 'styled-components';

export const LatLngContainer = styled.div`
	position: absolute;
	z-index: 2;
	right: 6px;

	pointer-events: none;

	&.up {
		bottom: ${(props) => Number(props.theme.fixedHeights.footer) + 6}px;
		transition: all 1s;
	}
	&.down {
		bottom: 6px;
		transition: all 1s;
	}
`;

export const LatLngComponent = styled.div`
	width: auto;
	padding: 2px 4px;

	background-color: ${(props) => props.theme.colors.primary};
	opacity: 0.8;

	border: 2px solid ${(props) => props.theme.colors.accent};
	border-radius: 3px;
`;
