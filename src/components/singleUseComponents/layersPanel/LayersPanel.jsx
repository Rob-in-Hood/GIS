import React, { useState } from 'react';

import { theme } from '@core/theme/theme';

import { SidePanelsContainer } from '@containers/SidePanelsContainer';
import { Accordion } from '@components/reusableComponents/accordion/Accordion';
import { AccordionItem } from '@components/reusableComponents/accordion/accordionItem/AccordionItem';

import { ContentComponents } from './contentComponents/ContentComponents';

export const LayersPanel = (props) => {
	const accItems = [
		{
			name: 'Загруженные с устройства',
			notCompleted: true,
			content: (
				<ContentComponents.DeviceLayersContent></ContentComponents.DeviceLayersContent>
			),
		},
		{
			name: 'Загруженные из профиля',
			notCompleted: true,
			content: (
				<ContentComponents.AccountLayersContent></ContentComponents.AccountLayersContent>
			),
		},
		{
			name: 'Нарисованные',
			notCompleted: true,
			content: (
				<ContentComponents.DrawingLayersContent></ContentComponents.DrawingLayersContent>
			),
		},
		{
			name: 'Измерительные',
			notCompleted: true,
			content: (
				<ContentComponents.MeasuringLayersContent></ContentComponents.MeasuringLayersContent>
			),
		},
	];

	const accHeightSubtrahend =
		props.heightSubtrahend +
		(theme.fixedHeights.accordionBtn + 1) * accItems.length;

	return (
		<SidePanelsContainer
			rightSticky={true}
			openRequest={props.isLayersPanelOpened}
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
