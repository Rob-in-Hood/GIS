import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-providers';

import { theme } from '@core/theme/theme';

import {
	selectProvider,
	selectMap,
	selectLayer,
	changeMap,
	changeLayer,
} from '@core/store/slices/mapSlice';
import { selectMapBottomControlsClass } from '@core/store/slices/mapBottomControlsSlice';
import {
	selectWindLayer,
	selectTempLayer,
} from '@core/store/slices/weatherSlice';

import * as weatherData from '@core/constants/weatherData';

import { MapContainer } from './Map.styled';
import { LatLng } from '@components/singleUseComponents/latLng/latLng';
import { WeatherLegend } from '@components/reusableComponents/weatherLegend/WeatherLegend';
import { WeatherLegendsContainer } from '@components/reusableComponents/weatherLegend/WeatherLegend.styled';

export const Map = () => {
	const dispatch = useDispatch();

	const mapRef = useRef(null);
	const [mouseCoords, setMouseCoords] = useState({});
	const mapControlsClass = useSelector(selectMapBottomControlsClass);
	const windLayer = useSelector(selectWindLayer);
	const tempLayer = useSelector(selectTempLayer);
	let provider = useSelector(selectProvider);
	let map = useSelector(selectMap);
	let curLayer = null;
	const layer = useSelector(selectLayer);

	let timerId = null;

	const setMapLayer = () => {
		if (map) {
			if (curLayer) removeMapLayer();
			curLayer = L.tileLayer.provider(provider);
			curLayer.addTo(map);
			curLayer.setZIndex(1);
			//dispatch(changeLayer(curLayer));
		}
	};
	const removeMapLayer = () => {
		map.removeLayer(curLayer);
	};
	setMapLayer();

	const mouseMoveDebouncing = (event) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => mouseMove(event), 7);
	};
	const mouseMove = (event) => {
		setMouseCoords(event.latlng);
	};
	const mouseOut = () => {
		clearTimeout(timerId);
		setMouseCoords({});
	};

	useEffect(() => {
		const mapElem = mapRef.current;

		//карта
		map = L.map(mapElem || 'map', {
			attributionControl: false,
			zoom: 12,
			maxZoom: 25,
			minZoom: 2.5,
			zoomControl: false,
			doubleClickZoom: false,
		});

		map.setView(new L.LatLng(68, 33), 3);
		setMapLayer();
		L.control.scale({ metric: true, imperial: false }).addTo(map);

		//ограничение карты
		const southWest = L.latLng(-85, -170),
			northEast = L.latLng(85, 191);
		const bounds = L.latLngBounds(southWest, northEast);
		map.setMaxBounds(bounds);

		map.on('mousemove', mouseMoveDebouncing);
		map.on('mouseout', mouseOut);

		dispatch(changeMap(map));

		return () => {
			map.off('mousemove', mouseMoveDebouncing);
			map.off('mouseout', mouseOut);
		};
	}, []);

	return (
		<>
			<MapContainer
				id='map'
				ref={mapRef}
				className={mapControlsClass}
			></MapContainer>
			<LatLng
				className={mapControlsClass}
				lat={mouseCoords.lat}
				lng={mouseCoords.lng}
			></LatLng>
			<WeatherLegendsContainer>
				{windLayer && (
					<WeatherLegend
						backgroundImage={theme.weatherBackground.wind}
						labels={weatherData.WIND_LEGEND_LABELS}
					></WeatherLegend>
				)}
				{tempLayer && (
					<WeatherLegend
						backgroundImage={theme.weatherBackground.temp}
						labels={weatherData.TEMP_LEGEND_LABELS}
					></WeatherLegend>
				)}
			</WeatherLegendsContainer>
		</>
	);
};
