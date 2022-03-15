import styled, { css } from 'styled-components';

export const StickyCloseablePanelContainer = styled.div`
	position: absolute;
	${(props) =>
		(props.topSticky || props.bottomSticky) &&
		css`
			left: ${(props) => (props.left ? `${props.left}px` : 'unset')};
			right: ${(props) => (props.right ? `${props.right}px` : 'unset')};
			top: ${(props) => (props.topSticky ? '0' : 'unset')};
			bottom: ${(props) => (props.bottomSticky ? '0' : 'unset')};
		`};
	${(props) =>
		(props.leftSticky || props.rightSticky) &&
		css`
			top: ${(props) => (props.top ? `${props.top}px` : 'unset')};
			bottom: ${(props) => (props.bottom ? `${props.bottom}px` : 'unset')};
			left: ${(props) => (props.leftSticky ? '0' : 'unset')};
			right: ${(props) => (props.rightSticky ? '0' : 'unset')};
		`};

	&.opened {
		${(props) =>
			(props.topSticky || props.bottomSticky) &&
			css`
				transform: translateY(0);
				transition: transform ${(props) => props.theme.transitionDelay}s;
			`};
		${(props) =>
			(props.leftSticky || props.rightSticky) &&
			css`
				transform: translateX(0);
				transition: transform ${(props) => props.theme.transitionDelay}s;
			`};
	}
	&.closed {
		${(props) =>
			(props.topSticky || props.bottomSticky) &&
			css`
				transform: translateY(
					${(props) => (props.bottomSticky ? '' : '-') + props.height + 'px'}
				);
				background-color: transparent;
				transition: transform ${(props) => props.theme.transitionDelay}s,
					background-color ${(props) => props.theme.transitionDelay * 4}s;

				&::after {
					position: absolute;
					width: 100%;
					height: 3px;
					content: ' ';
					top: ${(props) => (props.bottomSticky ? '-3px' : 'unset')};
					bottom: ${(props) => (props.topSticky ? '-3px' : 'unset')};
				}
			`};
		${(props) =>
			(props.leftSticky || props.rightSticky) &&
			css`
				transform: translateX(
					${(props) => (props.rightSticky ? '' : '-') + props.width + 'px'}
				);
				background-color: transparent;
				transition: transform ${(props) => props.theme.transitionDelay}s,
					background-color ${(props) => props.theme.transitionDelay * 4}s;

				&::after {
					position: absolute;
					left: ${(props) => (props.rightSticky ? '-3px' : 'unset')};
					right: ${(props) => (props.leftSticky ? '-3px' : 'unset')};
					height: 100%;
					width: 3px;
					content: ' ';
				}
			`};
	}
`;
