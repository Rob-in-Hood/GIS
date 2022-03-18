import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import L from 'leaflet';

import { selectMap } from '@core/store/slices/mapSlice';

import {
	selectWindLayer,
	selectTempLayer,
	changeWindLayer,
	changeTempLayer,
} from '@core/store/slices/weatherSlice';

import * as providers from '@core/constants/mapProviders';
import * as weatherData from '@core/constants/weatherData';

import { ToggleButton } from '@components/simpleUIComponents/toggleButton/ToggleButton';
import { Range } from '@components/simpleUIComponents/range/Range';

import {
	WeatherContentItemContainer,
	WeatherContentContainer,
} from './WeatherContent.styled';

import {
	faWind,
	faTemperatureHigh,
	faTemperatureLow,
} from '@fortawesome/free-solid-svg-icons';

export const WeatherContent = () => {
	const dispatch = useDispatch();

	const [windOpacity, setWindOpacity] = useState(50);
	const [tempOpacity, setTempOpacity] = useState(50);

	let windLayer = useSelector(selectWindLayer);
	let tempLayer = useSelector(selectTempLayer);

	const map = useSelector(selectMap);

	const setWindLayer = (value) => {
		if (map) {
			if (windLayer) removeWindLayer();
			if (value) {
				windLayer = L.tileLayer.provider(weatherData.WIND_PROVIDER, {
					apiKey: weatherData.OPENWEATERMAP_API_KEY,
				});
				dispatch(changeWindLayer(windLayer));
				map.addLayer(windLayer);
				windLayer.setZIndex(2);
			}
		}
	};
	const setWindLayerOpacity = (opacity) => {
		setWindOpacity(opacity);
		if (windLayer) windLayer.setOpacity(opacity / 100);
	};
	const removeWindLayer = () => {
		map.removeLayer(windLayer);
		windLayer = null;
		dispatch(changeWindLayer(windLayer));
	};
	const setWindOn = () => {
		setWindLayer(true);
	};
	const setWindOff = () => {
		setWindLayer(false);
	};

	const setTempLayer = (value) => {
		if (map) {
			if (tempLayer) removeTempLayerLayer();
			if (value) {
				tempLayer = L.tileLayer.provider(weatherData.TEMP_PROVIDER, {
					apiKey: weatherData.OPENWEATERMAP_API_KEY,
				});
				dispatch(changeTempLayer(tempLayer));
				map.addLayer(tempLayer);
				tempLayer.setZIndex(3);
			}
		}
	};
	const setTempLayerOpacity = (opacity) => {
		setTempOpacity(opacity);
		if (tempLayer) tempLayer.setOpacity(opacity / 100);
	};
	const removeTempLayerLayer = () => {
		map.removeLayer(tempLayer);
		tempLayer = null;
		dispatch(changeTempLayer(tempLayer));
	};
	const setTempOn = () => {
		setTempLayer(true);
	};
	const setTempOff = () => {
		setTempLayer(false);
	};

	return (
		<WeatherContentContainer>
			<WeatherContentItemContainer>
				<Range setValue={setWindLayerOpacity} initValue={windOpacity}></Range>
				<ToggleButton
					offIcon={faWind}
					onIcon={faWind}
					offFunc={setWindOff}
					onFunc={setWindOn}
				></ToggleButton>
			</WeatherContentItemContainer>
			<WeatherContentItemContainer>
				<Range setValue={setTempLayerOpacity} initValue={tempOpacity}></Range>
				<ToggleButton
					offIcon={faTemperatureHigh}
					onIcon={faTemperatureLow}
					offFunc={setTempOff}
					onFunc={setTempOn}
				></ToggleButton>
			</WeatherContentItemContainer>
		</WeatherContentContainer>
	);
};
