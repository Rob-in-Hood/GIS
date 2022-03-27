import React, { Children } from 'react';
import { ItemButton, ItemContent } from './AccordionItem.styled';

export const AccordionItem = (props) => {
	return (
		<>
			<ItemButton
				className={props.notCompleted ? 'not-completed' : ''}
				onClick={props.onClick}
				data-tooltip={props.dataTooltip}
				data-tooltip-location={props.dataTooltipLocation}
			>
				{props.name}
			</ItemButton>
			<ItemContent
				className={[
					props.unbordered ? 'unbordered' : '',
					props.active ? 'active' : '',
				]}
				accHeightSubtrahend={props.accHeightSubtrahend}
			>
				{props.children}
			</ItemContent>
		</>
	);
};
