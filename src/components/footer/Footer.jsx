import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
	changeLatLngFormat,
	changeMapBottomControlsClass,
} from '@core/store/slices/mapBottomControlsSlice';

import * as cCClasses from '@core/constants/closeablePanelsClasses';
import * as lLFormats from '@core/constants/latLngFormats';
import * as mBCClasses from '@core/constants/mapBottomControlsClasses';

import { theme } from '@core/theme/theme';

import { HeaderFooterContainer } from '@containers/HeaderFooterContainer';
import { IconButton } from '@components/simpleUIComponents/iconButton/IconButton';
import { ToggleButton } from '@components/simpleUIComponents/toggleButton/ToggleButton';
import { RightColumn } from './Footer.styled';

import {
	faAngleDown,
	faExpand,
	faCompress,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';

export const Footer = (props) => {
	const dispatch = useDispatch();
	let [isFooterOpened, setIsFooterOpened] = useState(true);

	const closeFooter = () => {
		setIsFooterOpened(false);
	};
	const openFooter = () => {
		setIsFooterOpened(true);
	};

	const setMBControlsUP = () => {
		dispatch(changeMapBottomControlsClass(mBCClasses.UP));
	};
	const setMBControlsDOWN = () => {
		dispatch(changeMapBottomControlsClass(mBCClasses.DOWN));
	};

	const setDecimalFormat = () => {
		dispatch(changeLatLngFormat(lLFormats.DECIMAL));
	};
	const setDMSFormat = () => {
		dispatch(changeLatLngFormat(lLFormats.DMS));
	};

	const setFullScreenMode = () => {
		if (document.body.requestFullscreen) {
			document.body.requestFullscreen();
		} else if (document.body.mozRequestFullScreen) {
			document.body.mozRequestFullScreen(); // Firefox
		} else if (document.body.webkitRequestFullscreen) {
			document.body.webkitRequestFullscreen(); // Chrome, Safari and Opera
		} else if (document.body.msRequestFullscreen) {
			document.body.msRequestFullscreen(); //IE/Edge
		}
	};
	const exitFullScreenMode = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen(); // Firefox
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen(); // Chrome, Safari and Opera
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen(); //IE/Edge
		}
	};

	const onHover = () => {
		if (isFooterOpened === false) openFooter();
	};

	return (
		<HeaderFooterContainer
			bottomSticky={true}
			height={theme.fixedHeights.footer}
			openRequest={isFooterOpened}
			openFunc={setMBControlsUP}
			closeFunc={setMBControlsDOWN}
			onMouseEnter={onHover}
		>
			<IconButton
				icon={faAngleDown}
				bordered={false}
				className='middle-column'
				onClick={closeFooter}
			></IconButton>
			<RightColumn className='right-column'>
				<ToggleButton
					offIcon={faGlobe}
					onIcon={faGlobe}
					offFunc={setDecimalFormat}
					onFunc={setDMSFormat}
				></ToggleButton>
				<ToggleButton
					offIcon={faExpand}
					onIcon={faCompress}
					offFunc={exitFullScreenMode}
					onFunc={setFullScreenMode}
				></ToggleButton>
			</RightColumn>
		</HeaderFooterContainer>
	);
};
