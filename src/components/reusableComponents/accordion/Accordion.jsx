import React, { useState } from 'react';

import { AccordionContainer } from './Accordion.styled';

export const Accordion = (props) => {
	const children = props.children;
	let [activeItem, setActiveItem] = useState(null);

	const onClick = (index) => {
		setActiveItem(index === activeItem ? null : index);
	};

	return (
		<AccordionContainer {...props}>
			{React.Children.map(children, (child, i) => {
				return i < children.length - 1
					? React.cloneElement(child, {
							active: i === activeItem,
							onClick: () => {
								onClick(i);
							},
					  })
					: React.cloneElement(child, {
							unbordered: true,
							active: i === activeItem,
							onClick: () => {
								onClick(i);
							},
					  });
			})}
		</AccordionContainer>
	);
};
