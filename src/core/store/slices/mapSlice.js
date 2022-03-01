import { createSlice } from '@reduxjs/toolkit';

import { CARTODB_VOYAGER } from '@core/constants/mapProviders';
import { DECIMAL } from '@core/constants/latLngFormats';
import { UP } from '@core/constants/mapControlsClasses';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		provider: CARTODB_VOYAGER,
		latLngFormat: DECIMAL,
		mapControlsClass: UP,
	},
	reducers: {
		changeProvider: (state, action) => {
			state.provider = action.payload;
		},
		changeLatLngFormat: (state, action) => {
			state.latLngFormat = action.payload;
		},
		changeMapControlsClass: (state, action) => {
			state.mapControlsClass = action.payload;
		},
	},
});

export const { changeProvider } = mapSlice.actions;
export const { changeLatLngFormat } = mapSlice.actions;
export const { changeMapControlsClass } = mapSlice.actions;
export const selectProvider = (state) => state.map.provider;
export const selectLatLngFormat = (state) => state.map.latLngFormat;
export const selectMapControlsClass = (state) => state.map.mapControlsClass;
export default mapSlice.reducer;
