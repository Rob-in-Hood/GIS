import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@components/simpleUIComponents/button/Button';

export const IconButton = (props) => {
	return (
		<Button {...props}>
			<FontAwesomeIcon icon={props.icon} />
		</Button>
	);
};
