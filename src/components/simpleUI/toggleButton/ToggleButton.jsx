import React, { useState } from 'react';

import * as classes from '@core/constants/toggleButtonClasses';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = styled.div`
	display: flex;
	align-items: center;

	width: 48px;
	height: 28px;

	border: 1px solid ${(props) => props.theme.colors.accent};
	border-radius: 14px;

	&.on {
		background-color: ${(props) => props.theme.colors.primary};
		transition: all 0.5s;
	}
	&.off {
		background-color: ${(props) => props.theme.colors.secondary};
		transition: all 0.5s;
	}
`;

const Switch = styled.div`
	display: flex;
	margin: auto auto auto 0;

	width: 26px;
	height: 22px;

	background-color: ${(props) => props.theme.colors.accent};
	border-radius: 14px;

	&.on {
		transform: translateX(19px);
		transition: all 0.5s;
	}
	&.off {
		transform: translateX(3px);
		transition: all 0.5s;
	}

	& svg {
		margin: auto;

		& path {
			fill: #fff;
		}
	}
`;

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
