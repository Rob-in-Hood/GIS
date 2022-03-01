import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@components/simpleUI/button/Button';

const Text = styled.span`
	margin-left: 4px;
`;

export const IconTextButton = (props) => {
	return (
		<Button {...props}>
			<FontAwesomeIcon icon={props.icon} />
			<Text>{props.text}</Text>
		</Button>
	);
};
