import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mapReducer from './slices/mapSlice';
import mapBottomControlsSlice from './slices/mapBottomControlsSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
	reducer: {
		map: mapReducer,
		mapBottomControls: mapBottomControlsSlice,
		weather: weatherReducer,
	},
	// возможно, временное решение для несериализуемых объектов
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
