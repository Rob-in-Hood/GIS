import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import * as formats from '@core/constants/latLngFormats';

import { selectLatLngFormat } from '@core/store/slices/mapBottomControlsSlice';

import { LatLngContainer, LatLngComponent } from './latLng.styled';

export const LatLng = (props) => {
	const format = useSelector(selectLatLngFormat);

	const convertToDms = (dd, isLng) => {
		const dir = dd < 0 ? (isLng ? 'W' : 'S') : isLng ? 'E' : 'N';

		const absDd = Math.abs(dd);
		const deg = absDd | 0;
		const frac = absDd - deg;
		const min = (frac * 60) | 0;
		const sec = frac * 3600 - min * 60;

		return deg + '°' + min + "'" + sec.toFixed(2) + '"' + dir;
	};

	return (
		<LatLngContainer className={props.className}>
			{props.lat && (
				<LatLngComponent>
					{format === formats.DECIMAL
						? props.lat?.toFixed(4)
						: convertToDms(props.lat, false)}
					{', '}
					{format === formats.DECIMAL
						? props.lng?.toFixed(4)
						: convertToDms(props.lng, true)}
				</LatLngComponent>
			)}
		</LatLngContainer>
	);
};
