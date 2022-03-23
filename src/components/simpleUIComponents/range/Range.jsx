import React, { useState, useRef, useEffect } from 'react';

import { RangeButton, RangeTrack, RangeContainer } from './Range.styled';

export const Range = (props) => {
	const [pos, setPos] = useState(props.initValue);
	const [minPos, setMinPos] = useState(0);
	const [maxPos, setMaxPos] = useState(100);
	const [mouseDown, setMouseDown] = useState(false);
	const trackRef = useRef(null);

	const rangeButtonDiameter = 16;
	const rangeTrackingWidth = 100;
	const rangeStep = props.step || 10;
	const rangeTrackWidth = rangeTrackingWidth + rangeButtonDiameter;

	let trackElem = null;
	let timerId = null;

	const onMouseDown = (e) => {
		setMouseDown(true);
		setCoords(e.clientX);
	};
	const onMouseUp = () => {
		setMouseDown(false);
	};
	const onMouseOver = () => {
		trackElem = trackRef.current;
		setMinPos(trackElem.getBoundingClientRect().left + rangeButtonDiameter / 2);
		setMaxPos(
			trackElem.getBoundingClientRect().left +
				rangeTrackWidth -
				rangeButtonDiameter / 2,
		);
	};

	const setCoords = (clientX) => {
		setPos(
			minPos <= clientX && clientX <= maxPos
				? Math.round((clientX - minPos) / rangeStep) * rangeStep
				: pos,
		);
		props.setValue(pos);
	};

	const mouseMove = (e) => {
		if (mouseDown) setCoords(e.clientX);
	};
	const mouseMoveDebouncing = (e) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => mouseMove(e), 5);
	};

	return (
		<RangeContainer
			onMouseMove={mouseMoveDebouncing}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseUp}
			onMouseUp={onMouseUp}
			onMouseDown={onMouseDown}
			trackWidth={rangeTrackWidth}
			data-tooltip={props.dataTooltip}
			data-tooltip-location={props.dataTooltipLocation}
		>
			<RangeTrack ref={trackRef} trackWidth={rangeTrackWidth} />
			<RangeButton diameter={rangeButtonDiameter} pos={pos} />
		</RangeContainer>
	);
};
