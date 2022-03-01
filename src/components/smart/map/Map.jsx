import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-providers';

import { selectProvider } from '@core/store/slices/mapSlice';

import { MapContainer } from '@containers/mapContainer/MapContainer';
import { LatLng } from '@components/ordinary/latLng/latLng';

export const Map = () => {
	const mapRef = useRef(null);
	const provider = useSelector(selectProvider);
	let curLayer = null;
	let map = null;
	let timerId = null;

	const [mouseCoords, setMouseCoords] = useState({});

	const setMapLayer = () => {
		curLayer = L.tileLayer.provider(provider);
		curLayer.addTo(map);
		curLayer.setZIndex(1);
	};
	const setWeatherLayer = () => {
		//
	};
	const removeLayer = () => {
		map.removeLayer(curLayer);
	};

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
		return () => {
			map.off('mousemove', mouseMoveDebouncing);
			map.off('mouseout', mouseOut);
		};
	}, []);

	return (
		<>
			<MapContainer id='map' ref={mapRef}></MapContainer>
			{mouseCoords.lat && (
				<LatLng lat={mouseCoords.lat} lng={mouseCoords.lng}></LatLng>
			)}
		</>
	);
};
