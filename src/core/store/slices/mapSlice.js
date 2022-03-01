import { createSlice } from '@reduxjs/toolkit';

import { CARTODB_VOYAGER } from '@core/constants/mapProviders';
import { DECIMAL } from '@core/constants/latLngFormats';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		provider: CARTODB_VOYAGER,
		latLngFormat: DECIMAL,
	},
	reducers: {
		changeProvider: (state, action) => {
			state.provider = action.payload;
		},
		changeLatLngFormat: (state, action) => {
			state.latLngFormat = action.payload;
		},
	},
});

export const { changeProvider } = mapSlice.actions;
export const { changeLatLngFormat } = mapSlice.actions;
export const selectProvider = (state) => state.map.provider;
export const selectLatLngFormat = (state) => state.map.latLngFormat;
export default mapSlice.reducer;
