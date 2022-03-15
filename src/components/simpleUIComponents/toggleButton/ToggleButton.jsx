import React, { useState } from 'react';

import * as classes from '@core/constants/toggleButtonClasses';

import { Toggle, Switch } from './ToggleButton.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ToggleButton = (props) => {
	const [onOffClass, setClass] = useState(classes.OFF);

	const onClick = () => {
		onOffClass === classes.OFF ? props.onFunc() : props.offFunc();
		setClass(`${onOffClass === classes.OFF ? classes.ON : classes.OFF}`);
	};

	return (
		<Toggle className={`${onOffClass}`} onClick={onClick}>
			<Switch className={`${onOffClass}`}>
				<FontAwesomeIcon
					icon={onOffClass === classes.OFF ? props.offIcon : props.onIcon}
				></FontAwesomeIcon>
			</Switch>
		</Toggle>
	);
};
