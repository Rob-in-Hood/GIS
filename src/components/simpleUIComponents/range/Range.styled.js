import styled from 'styled-components';

export const RangeButton = styled.div`
	position: absolute;
	margin-left: ${(props) => `${props.pos}px`};
	height: ${(props) => `${props.diameter}px`};
	width: ${(props) => `${props.diameter}px`};

	border: ${(props) => `1px solid ${props.theme.colors.accent}`};
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.primary};

	cursor: pointer;

	&:active {
		background-color: ${(props) => props.theme.colors.secondary};
		box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.accent};
	}
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const RangeTrack = styled.div`
	position: absolute;
	margin-left: 0;
	height: 4px;
	width: ${(props) => props.trackWidth}px;
	pointer-events: none;

	border: ${(props) => `1px solid ${props.theme.colors.accent}`};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.accent};
`;

export const RangeContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	width: ${(props) => props.trackWidth}px;

	cursor: pointer;
`;
