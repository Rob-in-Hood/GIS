import React, { useState } from 'react';

import { theme } from '@core/theme/theme';

import { SidePanelsContainer } from '@containers/SidePanelsContainer';
import { Accordion } from '@components/reusableComponents/accordion/Accordion';
import { AccordionItem } from '@components/reusableComponents/accordion/accordionItem/AccordionItem';

import { ContentComponents } from './contentComponents/ContentComponents';

export const ToolsPanel = (props) => {
	const accItems = [
		{
			name: 'Карты',
			notCompleted: true,
			content: <ContentComponents.MapsContent></ContentComponents.MapsContent>,
		},
		{
			name: 'Погода',
			notCompleted: false,
			content: (
				<ContentComponents.WeatherContent></ContentComponents.WeatherContent>
			),
		},
		{
			name: 'Скачать',
			notCompleted: true,
			content: (
				<ContentComponents.DownloadingContent></ContentComponents.DownloadingContent>
			),
		},
		{
			name: 'Рисование',
			notCompleted: true,
			content: (
				<ContentComponents.DrawingContent></ContentComponents.DrawingContent>
			),
		},
		{
			name: 'Измерение',
			notCompleted: true,
			content: (
				<ContentComponents.MeasuringContent></ContentComponents.MeasuringContent>
			),
		},
		{
			name: 'Печать',
			notCompleted: true,
			content: (
				<ContentComponents.PrintingContent></ContentComponents.PrintingContent>
			),
		},
	];

	const accHeightSubtrahend =
		props.heightSubtrahend +
		(theme.fixedHeights.accordionBtn + 1) * accItems.length;

	return (
		<SidePanelsContainer
			leftSticky={true}
			openRequest={props.isToolsPanelOpened}
			{...props}
		>
			<Accordion width={380}>
				{accItems.map((item) => (
					<AccordionItem
						key={item.name}
						name={item.name}
						notCompleted={item.notCompleted}
						accHeightSubtrahend={accHeightSubtrahend}
					>
						{item.content}
					</AccordionItem>
				))}
			</Accordion>
		</SidePanelsContainer>
	);
};
