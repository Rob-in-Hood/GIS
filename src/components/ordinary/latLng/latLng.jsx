import React from 'react';
import { LatLngContainer } from '@containers/latLngContainer/latLngContainer';

export const LatLng = (props) => {
	return (
		<LatLngContainer>
			{props.lat?.toFixed(4)}, {props.lng?.toFixed(4)}
		</LatLngContainer>
	);
};
