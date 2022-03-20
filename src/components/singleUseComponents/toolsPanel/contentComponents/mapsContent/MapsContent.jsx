import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeProvider } from '@core/store/slices/mapSlice';

import * as providers from '@core/constants/mapProviders';

import { MapsContentContainer } from './MapsContent.styled';
import { ImageButton } from '@components/simpleUIComponents/imageButton/ImageButton';

import classic from '@assets/icons/classic.png';
import { render } from 'react-dom';

export const MapsContent = () => {
	const dispatch = useDispatch();

	const [active, setActive] = useState(0);

	const btnWidth = 80;

	let mapsItems = [
		{
			name: 'Классическая',
			provider: providers.CARTODB_VOYAGER,
			backgroundImage: classic,
		},
		{
			name: 'Серо-белая',
			provider: providers.STAMEN_TONERLITE,
			backgroundImage: classic,
		},
		{
			name: 'Черно-белая',
			provider: providers.STAMEN_TONER,
			backgroundImage: classic,
		},
		{
			name: 'Темная',
			provider: providers.CARTODB_DARKMATTER,
			backgroundImage: classic,
		},
		{
			name: 'Рельефная',
			provider: providers.ESRI_NATGEOWORLD,
			backgroundImage: classic,
		},
		{
			name: 'Акварель',
			provider: providers.STAMEN_WATERCOLOR,
			backgroundImage: classic,
		},
		{
			name: 'Физическая',
			provider: providers.OPENTOPOMAP,
			backgroundImage: classic,
		},
		{
			name: 'Спутник',
			provider: providers.ESRI_WORLDIMAGERY,
			backgroundImage: classic,
		},
	];

	const onClick = (e) => {
		const itemId = mapsItems.findIndex((item) => item.name === e.target.name);
		setActive(itemId);
		dispatch(changeProvider(mapsItems[itemId].provider));
	};

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
					className={id === active ? 'active' : ''}
				></ImageButton>
			))}
		</MapsContentContainer>
	);
};
