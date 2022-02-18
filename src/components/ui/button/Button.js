import styled from 'styled-components';

export const Button = styled.button`
	height: fit-content;
	width: fit-content;
	padding: 4px 8px;

	border: ${(props) =>
		props.bordered
			? `1px solid ${props.theme.colors.accent}`
			: '1px solid transparent'};
	border-radius: 3px;
	background-color: transparent;

	font-size: ${(props) => props.theme.fontSizes.medium};

	&:active {
		background-color: ${(props) => props.theme.colors.secondary};
		box-shadow: 0px 0px 0px 1px
			${(props) => (props.bordered ? props.theme.colors.accent : 'transparent')};
	}
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;
