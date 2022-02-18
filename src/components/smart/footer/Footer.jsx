import React, { useEffect, useState } from 'react';

import * as hFClasses from '@core/constants/headerFooterClasses';

import styled from 'styled-components';
import { theme } from '@core/theme/theme';

import { StickyCloseableContainer } from '@containers/stickyCloseableContainer/StickyCloseableContainer';
import { IconButton } from '@components/ui/iconButton/IconButton';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export const Footer = (props) => {
	let [footerClass, setClass] = useState(hFClasses.OPENED);

	const closeFooter = () => {
		setClass(hFClasses.CLOSED);
	};
	const openFooter = () => {
		setClass(hFClasses.OPENED);
	};

	const onHover = () => {
		if (footerClass === hFClasses.CLOSED) openFooter();
	};

	return (
		<StickyCloseableContainer
			bottomSticky={true}
			height={theme.fixedHeights.footer}
			className={footerClass}
			onMouseEnter={onHover}
		>
			<IconButton
				icon={faAngleDown}
				bordered={false}
				className='middle-column'
				onClick={closeFooter}
			></IconButton>
		</StickyCloseableContainer>
	);
};
