import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from './IconTextButton.styled';
import { Button } from '@components/simpleUIComponents/button/Button';

export const IconTextButton = (props) => {
	return (
		<Button {...props}>
			<FontAwesomeIcon icon={props.icon} />
			<Text>{props.text}</Text>
		</Button>
	);
};
