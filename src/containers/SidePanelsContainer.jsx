import React from 'react';
import styled from 'styled-components';

import { StickyCloseablePanel } from '@components/reusableComponents/stickyCloseablePanel/StickyCloseablePanel';

export const SidePanelsContainer = styled((props) => (
	<StickyCloseablePanel {...props} />
))`
	z-index: 3;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: ${(props) => props.width}px;

	background: ${(props) => props.theme.colors.primary};
	opacity: ${(props) => props.theme.opacity};

	&.up {
		height: calc(100% - ${(props) => props.heightSubtrahend}px);
		transition: all ${(props) => props.theme.transitionDelay}s;
	}
	&.down {
		height: calc(100% - ${(props) => props.heightSubtrahend}px);
		transition: all ${(props) => props.theme.transitionDelay}s;
	}
`;
