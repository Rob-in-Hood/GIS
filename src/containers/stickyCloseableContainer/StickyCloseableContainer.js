import styled from 'styled-components';

export const StickyCloseableContainer = styled.div`
	position: absolute;
	top: ${(props) => (props.topSticky ? '0' : 'none')};
	bottom: ${(props) => (props.bottomSticky ? '0' : 'none')};
	z-index: 2;
	display: inline-grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 16px 6px;
	width: calc(100% - 12px);
	max-height: ${(props) => props.height}px;
	padding: 16px 6px;

	background: ${(props) => props.theme.colors.primary};
	opacity: ${(props) => props.theme.opacity};

	.left-column {
		grid-column: 1;
		justify-self: start;
	}
	.middle-column {
		grid-column: 2;
		justify-self: center;
	}
	.right-column {
		grid-column: 3;
		justify-self: end;
	}

	&.opened {
		transform: translateY(0);
		transition: transform 1s;
	}
	&.closed {
		transform: translateY(
			${(props) => (props.bottomSticky ? '' : '-') + (props.height - 3) + 'px'}
		);
		background-color: transparent;
		transition: transform 1s, background-color 2s;
	}
`;
