import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
	changeLatLngFormat,
	changeMapControlsClass,
} from '@core/store/slices/mapSlice';

import * as hFClasses from '@core/constants/headerFooterClasses';
import * as lLFormats from '@core/constants/latLngFormats';
import * as mCClasses from '@core/constants/mapControlsClasses';

import styled from 'styled-components';
import { theme } from '@core/theme/theme';

import { StickyCloseableContainer } from '@containers/stickyCloseableContainer/StickyCloseableContainer';
import { IconButton } from '@components/simpleUI/iconButton/IconButton';
import { ToggleButton } from '@components/simpleUI/toggleButton/ToggleButton';

import {
	faAngleDown,
	faExpand,
	faCompress,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const RightColumn = styled.div`
	& div {
		display: inline-flex;

		&:nth-child(n) {
			margin-right: 10px;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;

export const Footer = (props) => {
	const dispatch = useDispatch();
	let [footerClass, setClass] = useState(hFClasses.OPENED);

	const closeFooter = () => {
		setClass(hFClasses.CLOSED);
		dispatch(changeMapControlsClass(mCClasses.DOWN));
	};
	const openFooter = () => {
		setClass(hFClasses.OPENED);
		dispatch(changeMapControlsClass(mCClasses.UP));
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
		</StickyCloseableContainer>
	);
};
