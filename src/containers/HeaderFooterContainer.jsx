import React from 'react';
import styled from 'styled-components';

import { OPENED } from '@core/constants/closeablePanelsClasses';

import { StickyCloseablePanel } from '@components/reusableComponents/stickyCloseablePanel/StickyCloseablePanel';

export const HeaderFooterContainer = styled((props) => (
	<StickyCloseablePanel {...props} defaultClass={OPENED} />
))`
	z-index: 2;

	display: inline-grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 16px 6px;
	width: calc(100% - 12px);
	max-height: ${(props) => props.height}px;

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
`;
