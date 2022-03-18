import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectMapBottomControlsClass } from '@core/store/slices/mapBottomControlsSlice';

import * as mBCClasses from '@core/constants/mapBottomControlsClasses';

import { theme } from '@core/theme/theme';

import { HeaderFooterContainer } from '@containers/HeaderFooterContainer';
import { ToolsPanel } from '@components/singleUseComponents/toolsPanel/ToolsPanel';
import { LayersPanel } from '@components/singleUseComponents/layersPanel/LayersPanel';
import { IconTextButton } from '@components/simpleUIComponents/iconTextButton/IconTextButton';
import { IconButton } from '@components/simpleUIComponents/iconButton/IconButton';
import { MiddleColumn } from './Header.styled';

import {
	faScrewdriverWrench,
	faLayerGroup,
	faUser,
	faUpload,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	let [isHeaderOpened, setIsHeaderOpened] = useState(true);
	let [isLayersPanelOpened, setIsLayersPanelOpened] = useState(false);
	let [isToolsPanelOpened, setIsToolsPanelOpened] = useState(false);

	const mapBottomControlsClass = useSelector(selectMapBottomControlsClass);
	const maxPanelsHeight = (theme.fixedHeights.footer + 1) * 2;
	const minPanelsHeight = theme.fixedHeights.footer + 1;

	const closeHeader = () => {
		setIsLayersPanelOpened(false);
		setIsToolsPanelOpened(false);
		setTimeout(
			() => {
				setIsHeaderOpened(false);
			},
			isLayersPanelOpened || isToolsPanelOpened
				? theme.transitionDelay * 1000
				: 0,
		);
	};
	const openHeader = () => {
		setIsHeaderOpened(true);
	};
	const onHoverHeader = () => {
		if (isHeaderOpened === false) openHeader();
	};

	const onClickLayersBtn = () => {
		setIsLayersPanelOpened(!isLayersPanelOpened);
	};
	const onClickToolsBtn = () => {
		setIsToolsPanelOpened(!isToolsPanelOpened);
	};

	return (
		<>
			<HeaderFooterContainer
				topSticky={true}
				height={theme.fixedHeights.header}
				openRequest={isHeaderOpened}
				onMouseEnter={onHoverHeader}
			>
				<IconTextButton
					text='Инструменты'
					icon={faScrewdriverWrench}
					bordered={true}
					className='left-column'
					onClick={onClickToolsBtn}
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
					onClick={onClickLayersBtn}
				/>
			</HeaderFooterContainer>
			<ToolsPanel
				width={theme.fixedWidths.toolsPanel}
				top={theme.fixedHeights.header}
				isToolsPanelOpened={isToolsPanelOpened}
				heightSubtrahend={
					mapBottomControlsClass === mBCClasses.UP
						? maxPanelsHeight
						: minPanelsHeight
				}
				className={mapBottomControlsClass}
			></ToolsPanel>
			<LayersPanel
				width={theme.fixedWidths.layersPanel}
				top={theme.fixedHeights.header}
				isLayersPanelOpened={isLayersPanelOpened}
				heightSubtrahend={
					mapBottomControlsClass === mBCClasses.UP
						? maxPanelsHeight
						: minPanelsHeight
				}
				className={mapBottomControlsClass}
			></LayersPanel>
		</>
	);
};
