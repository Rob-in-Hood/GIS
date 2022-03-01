import React, { useState } from 'react';

import * as hFClasses from '@core/constants/headerFooterClasses';

import styled from 'styled-components';
import { theme } from '@core/theme/theme';

import { StickyCloseableContainer } from '@containers/stickyCloseableContainer/StickyCloseableContainer';
import { IconTextButton } from '@components/simpleUI/iconTextButton/IconTextButton';
import { IconButton } from '@components/simpleUI/iconButton/IconButton';

import {
	faScrewdriverWrench,
	faLayerGroup,
	faUser,
	faUpload,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

const MiddleColumn = styled.div`
	& * {
		&:nth-child(n) {
			margin-right: 20px;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;

export const Header = () => {
	let [headerClass, setClass] = useState(hFClasses.OPENED);

	const closeHeader = () => {
		setClass(hFClasses.CLOSED);
	};
	const openHeader = () => {
		setClass(hFClasses.OPENED);
	};

	const onHover = () => {
		if (headerClass === hFClasses.CLOSED) openHeader();
	};

	return (
		<StickyCloseableContainer
			topSticky={true}
			height={theme.fixedHeights.header}
			className={headerClass}
			onMouseEnter={onHover}
		>
			<IconTextButton
				text='Инструменты'
				icon={faScrewdriverWrench}
				bordered={true}
				className='left-column'
			/>
			<MiddleColumn className='middle-column'>
				<IconButton icon={faUser} bordered={true}></IconButton>
				<IconButton
					icon={faAngleUp}
					bordered={false}
					onClick={closeHeader}
				></IconButton>
				<IconButton icon={faUpload} bordered={true}></IconButton>
			</MiddleColumn>
			<IconTextButton
				text='Слои'
				icon={faLayerGroup}
				bordered={true}
				className='right-column'
			/>
		</StickyCloseableContainer>
	);
};
