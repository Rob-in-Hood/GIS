import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import * as formats from '@core/constants/latLngFormats';

import { selectLatLngFormat } from '@core/store/slices/mapSlice';

import {
	LatLngContainer,
	LatLngComponent,
} from '@components/latLng/latLng.styled';

export const LatLng = (props) => {
	const format = useSelector(selectLatLngFormat);

	const convertToDms = (dd, isLng) => {
		var dir = dd < 0 ? (isLng ? 'W' : 'S') : isLng ? 'E' : 'N';

		var absDd = Math.abs(dd);
		var deg = absDd | 0;
		var frac = absDd - deg;
		var min = (frac * 60) | 0;
		var sec = frac * 3600 - min * 60;

		return deg + '°' + min + "'" + sec.toFixed(2) + '"' + dir;
	};

	return (
		<LatLngContainer className={props.className}>
			{props.lat && (
				<LatLngComponent>
					{format === formats.DECIMAL
						? props.lat?.toFixed(4)
						: convertToDms(props.lat, false)}
					,{' '}
					{format === formats.DECIMAL
						? props.lng?.toFixed(4)
						: convertToDms(props.lng, true)}
				</LatLngComponent>
			)}
		</LatLngContainer>
	);
};