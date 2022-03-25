import styled from 'styled-components';

export const AppContainer = styled.div`
	& * {
		font-family: ${(props) => props.theme.fonts[1]};
		font-variation-settings: 'wght' 500;
		will-change: top;
	}

	& .not-completed:hover {
		background: ${(props) => props.theme.notCompletedBackground};
	}

	/* TOOLTIP */
	[data-tooltip] {
		position: relative;
		z-index: 100;
	}
	/* Tooltip + arrow */
	[data-tooltip]:before,
	[data-tooltip]:after {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition: 0.2s;
		will-change: transform;
		z-index: 100;
	}
	/* Tooltip */
	[data-tooltip]:before {
		content: attr(data-tooltip);
		padding: 4px 8px;
		min-width: 50px;
		max-width: 120px;
		width: max-content;
		border-radius: 4px;
		font-size: ${(props) => props.theme.fontSizes.small};
		background-color: ${(props) => props.theme.colors.accent};
		opacity: ${(props) => props.theme.opacity};
		color: ${(props) => props.theme.colors.primary};
		text-align: center;
		white-space: pre-wrap;
		transform: translate(-50%, 25%) scale(0.5);
	}
	/* Arrow */
	[data-tooltip]:after {
		content: '';
		border-style: solid;
		opacity: ${(props) => props.theme.opacity};
		transition-duration: 0s;
	}
	/* Tooltip on hover */
	[data-tooltip]:hover:before {
		visibility: visible;
		transition-delay: 0.3s;
		transform: translate(-50%, 25%) scale(1);
	}
	/* Arrow on hover */
	[data-tooltip]:hover:after {
		transition-delay: 0.5s;
		transition-duration: 0.2s;
	}

	/* LEFT */
	/* Tooltip + arrow */
	[data-tooltip-location='left']:before,
	[data-tooltip-location='left']:after {
		left: auto;
		right: ${(props) => `calc(100% + ${props.theme.tooltipArrowSize})`};
		bottom: 50%;
	}
	/* Tooltip */
	[data-tooltip-location='left']:before {
		transform: ${(props) => `translate(-${props.theme.tooltipArrowSize}, 50%)
			scale(0.5)`};
	}
	[data-tooltip-location='left']:hover:before {
		transform: ${(props) => `translate(-${props.theme.tooltipArrowSize}, 50%)
			scale(1)`};
	}
	/* Arrow */
	[data-tooltip-location='left']:after {
		border-width: ${(props) =>
			`${props.theme.tooltipArrowSize} 0 ${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize}`};
		border-color: transparent transparent transparent
			${(props) => props.theme.colors.accent};
		transform-origin: left;
		transform: translateY(50%) scaleX(0);
	}
	[data-tooltip-location='left']:hover:after {
		visibility: visible;
		transform: translateY(50%) scaleX(1);
	}

	/* RIGHT */
	/* Tooltip + arrow */
	[data-tooltip-location='right']:before,
	[data-tooltip-location='right']:after {
		left: ${(props) => `calc(100% + ${props.theme.tooltipArrowSize})`};
		bottom: 50%;
	}
	/* Tooltip */
	[data-tooltip-location='right']:before {
		transform: ${(props) => `translate(${props.theme.tooltipArrowSize}, 50%)
			scale(0.5)`};
	}
	[data-tooltip-location='right']:hover:before {
		transform: ${(props) => `translate(${props.theme.tooltipArrowSize}, 50%)
			scale(1)`};
	}
	/* Arrow */
	[data-tooltip-location='right']:after {
		border-width: ${(props) =>
			`${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize} 0`};

		border-color: transparent ${(props) => props.theme.colors.accent}
			transparent transparent;
		transform-origin: right;
		transform: translateY(50%) scaleX(0);
	}
	[data-tooltip-location='right']:hover:after {
		visibility: visible;
		transform: translateY(50%) scaleX(1);
	}

	/* BOTTOM */
	/* Tooltip + arrow */
	[data-tooltip-location='bottom']:before,
	[data-tooltip-location='bottom']:after {
		left: 50%;
		top: ${(props) => `calc(100% + ${props.theme.tooltipArrowSize})`};
		bottom: auto;
	}
	/* Tooltip */
	[data-tooltip-location='bottom']:before {
		transform: ${(props) => `translate(-50%, ${props.theme.tooltipArrowSize})
			scale(0.5)`};
	}
	[data-tooltip-location='bottom']:hover:before {
		transform: ${(props) => `translate(-50%, ${props.theme.tooltipArrowSize})
			scale(1)`};
	}
	/* Arrow */
	[data-tooltip-location='bottom']:after {
		border-width: ${(props) =>
			`0 ${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize}`};
		border-color: transparent transparent
			${(props) => props.theme.colors.accent} transparent;
		transform-origin: bottom;
		transform: translateX(-50%) scaleY(0);
	}
	[data-tooltip-location='bottom']:hover:after {
		visibility: visible;
		transform: translateX(-50%) scaleY(1);
	}

	/* TOP */
	/* Tooltip + arrow */
	[data-tooltip-location='top']:before,
	[data-tooltip-location='top']:after {
		left: 50%;
		bottom: ${(props) => `calc(100% + ${props.theme.tooltipArrowSize})`};
	}
	/* Tooltip */
	[data-tooltip-location='top']:before {
		transform: ${(props) => `translate(-50%, -${props.theme.tooltipArrowSize})
			scale(0.5)`};
	}
	[data-tooltip-location='top']:hover:before {
		transform: ${(props) => `translate(-50%, -${props.theme.tooltipArrowSize})
			scale(1)`};
	}
	/* Arrow */
	[data-tooltip-location='top']:after {
		border-width: ${(props) =>
			`${props.theme.tooltipArrowSize} ${props.theme.tooltipArrowSize} 0 ${props.theme.tooltipArrowSize}`};
		border-color: ${(props) => props.theme.colors.accent} transparent
			transparent transparent;
		transform-origin: top;
		transform: translateX(-50%) scaleY(0);
	}
	[data-tooltip-location='top']:hover:after {
		visibility: visible;
		transform: translateX(-50%) scaleY(1);
	}
`;
