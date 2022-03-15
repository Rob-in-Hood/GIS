import React, { useState, useEffect } from 'react';

import * as cPClasses from '@core/constants/closeablePanelsClasses';

import { StickyCloseablePanelContainer } from './StickyCloseablePanel.styled';

export const StickyCloseablePanel = (props) => {
	let [panelClass, setClass] = useState(props.defaultClass || cPClasses.CLOSED);

	const closePanel = () => {
		setClass(cPClasses.CLOSED);
		if (props.closeFunc) props.closeFunc();
	};
	const openPanel = () => {
		setClass(cPClasses.OPENED);
		if (props.openFunc) props.openFunc();
	};

	const onOpenRequest = () => {
		if (panelClass === cPClasses.CLOSED) openPanel();
	};

	useEffect(() => {
		if (props.openRequest) onOpenRequest();
		else closePanel();
	});

	return (
		<StickyCloseablePanelContainer
			{...props}
			className={[props.className, panelClass]}
		></StickyCloseablePanelContainer>
	);
};
