import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import L from 'leaflet';

import {
	changeCurLayer,
	selectCurLayer,
	selectMap,
	changeMap,
} from '@core/store/slices/mapSlice';

import * as providers from '@core/constants/mapProviders';

import { MapsContentContainer } from './MapsContent.styled';
import { ImageButton } from '@components/simpleUIComponents/imageButton/ImageButton';

import voyager from '@assets/icons/voyager.png';
import tonerlite from '@assets/icons/tonerlite.png';
import toner from '@assets/icons/toner.png';
import darkmatter from '@assets/icons/darkmatter.png';
import natgeoworld from '@assets/icons/natgeoworld.png';
import watercolor from '@assets/icons/watercolor.png';
import opentopomap from '@assets/icons/opentopomap.png';
import worldimagery from '@assets/icons/worldimagery.png';

export const MapsContent = () => {
	const dispatch = useDispatch();
	const btnWidth = 80;

	const mapsItems = [
		{
			name: 'Классическая',
			backgroundImage: voyager,
			layer: L.tileLayer.provider(providers.CARTODB_VOYAGER),
		},
		{
			name: 'Серо-белая',
			backgroundImage: tonerlite,
			layer: L.tileLayer.provider(providers.STAMEN_TONERLITE),
		},
		{
			name: 'Черно-белая',
			backgroundImage: toner,
			layer: L.tileLayer.provider(providers.STAMEN_TONER),
		},
		{
			name: 'Темная',
			backgroundImage: darkmatter,
			layer: L.tileLayer.provider(providers.CARTODB_DARKMATTER),
		},
		{
			name: 'Рельефная',
			backgroundImage: natgeoworld,
			layer: L.tileLayer.provider(providers.ESRI_NATGEOWORLD),
		},
		{
			name: 'Акварель',
			backgroundImage: watercolor,
			layer: L.tileLayer.provider(providers.STAMEN_WATERCOLOR),
		},
		{
			name: 'Физическая',
			backgroundImage: opentopomap,
			layer: L.tileLayer.provider(providers.OPENTOPOMAP),
		},
		{
			name: 'Спутник',
			backgroundImage: worldimagery,
			layer: L.tileLayer.provider(providers.ESRI_WORLDIMAGERY),
		},
	];

	const map = useSelector(selectMap);
	let curLayer = useSelector(selectCurLayer);
	const [activeId, setActiveId] = useState(
		curLayer
			? mapsItems.findIndex(
					(item) => item.layer._leaflet_id === curLayer._leaflet_id,
			  )
			: 0,
	);

	const setMapLayer = (itemId) => {
		if (map) {
			const newLayer = mapsItems[itemId].layer;

			if (!curLayer || newLayer._leaflet_id !== curLayer._leaflet_id) {
				if (curLayer) removeLayer();

				map.addLayer(newLayer);
				newLayer.setZIndex(1);
				dispatch(changeCurLayer(newLayer));
			}
		}
	};
	const removeLayer = () => {
		map.removeLayer(curLayer);
	};

	const onClick = (e) => {
		const itemId = mapsItems.findIndex((item) => item.name === e.target.name);
		setActiveId(itemId);
		setMapLayer(itemId);
	};

	useEffect(() => {
		if (!curLayer) setMapLayer(activeId);
	});

	return (
		<MapsContentContainer>
			{mapsItems.map((item, id) => (
				<ImageButton
					key={item.name}
					name={item.name}
					onClick={onClick}
					backgroundImage={item.backgroundImage}
					width={btnWidth}
					height={btnWidth}
					className={id === activeId ? 'active' : ''}
					data-tooltip={item.name}
				></ImageButton>
			))}
		</MapsContentContainer>
	);
};
