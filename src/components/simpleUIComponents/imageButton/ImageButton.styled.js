import styled from 'styled-components';

export const ImageButtonContainer = styled.button`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	padding: 0;

	border: ${(props) => `1px solid ${props.theme.colors.accent}`};
	border-radius: 3px;
	background-color: transparent;
	background-image: url(${(props) => props.backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	font-size: ${(props) => props.theme.fontSizes.medium};

	&:active,
	&.active {
		background-color: ${(props) => props.theme.colors.secondary};
		box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.accent};
	}
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
		background-blend-mode: multiply;
	}
`;
