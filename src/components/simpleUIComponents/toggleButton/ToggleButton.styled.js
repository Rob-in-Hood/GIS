import styled from 'styled-components';

export const Toggle = styled.div`
	display: flex;
	align-items: center;

	width: 48px;
	height: 28px;

	border: 1px solid ${(props) => props.theme.colors.accent};
	border-radius: 14px;

	&.on {
		background-color: ${(props) => props.theme.colors.primary};
		transition: all ${(props) => props.theme.transitionDelay}s;
	}
	&.off {
		background-color: ${(props) => props.theme.colors.secondary};
		transition: all ${(props) => props.theme.transitionDelay}s;
	}
`;

export const Switch = styled.div`
	display: flex;
	margin: auto auto auto 0;

	width: 26px;
	height: 22px;

	background-color: ${(props) => props.theme.colors.accent};
	border-radius: 14px;

	&.on {
		transform: translateX(19px);
		transition: all ${(props) => props.theme.transitionDelay}s;
	}
	&.off {
		transform: translateX(3px);
		transition: all ${(props) => props.theme.transitionDelay}s;
	}

	& svg {
		margin: auto;

		& path {
			fill: #fff;
		}
	}
`;
