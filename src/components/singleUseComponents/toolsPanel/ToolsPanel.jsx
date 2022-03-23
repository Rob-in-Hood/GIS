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
			tooltip: 'Смена основного слоя карты',
			notCompleted: false,
			content: <ContentComponents.MapsContent></ContentComponents.MapsContent>,
		},
		{
			name: 'Погода',
			tooltip: 'Отображение погодных слоев',
			notCompleted: false,
			content: (
				<ContentComponents.WeatherContent></ContentComponents.WeatherContent>
			),
		},
		{
			name: 'Скачать',
			tooltip: 'Скачивание карты',
			notCompleted: true,
			content: (
				<ContentComponents.DownloadingContent></ContentComponents.DownloadingContent>
			),
		},
		{
			name: 'Рисование',
			tooltip: 'Добавление слоя рисования на карту',
			notCompleted: true,
			content: (
				<ContentComponents.DrawingContent></ContentComponents.DrawingContent>
			),
		},
		{
			name: 'Измерение',
			tooltip: 'Добавление слоя измерения на карту',
			notCompleted: true,
			content: (
				<ContentComponents.MeasuringContent></ContentComponents.MeasuringContent>
			),
		},
		{
			name: 'Печать',
			tooltip: 'Печать карты',
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
						dataTooltip={item.tooltip}
						dataTooltipLocation='right'
					>
						{item.content}
					</AccordionItem>
				))}
			</Accordion>
		</SidePanelsContainer>
	);
};
