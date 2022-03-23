import styled from 'styled-components';

export const ItemButton = styled.button`
	position: relative;

	height: ${(props) => props.theme.fixedHeights.accordionBtn}px;
	width: 100%;
	padding: 4px auto;

	border: none;
	background-color: transparent;

	font-size: ${(props) => props.theme.fontSizes.medium};

	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const ItemContent = styled.div`
	position: relative;
	display: flex;
	overflow: hidden;

	width: 100%;
	max-height: 0;

	border-bottom: 1px solid ${(props) => props.theme.colors.accent};

	transition: max-height ${(props) => props.theme.transitionDelay}s;

	&.unbordered {
		border-bottom: none;
	}
	&.active {
		max-height: calc(100vh - ${(props) => props.accHeightSubtrahend}px);

		overflow: inherit;
	}
`;
