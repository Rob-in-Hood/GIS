import { createSlice } from '@reduxjs/toolkit';

import { CARTODB_VOYAGER } from '@core/constants/mapProviders';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		map: null,
		provider: CARTODB_VOYAGER,
		layer: null,
	},
	reducers: {
		changeMap: (state, action) => {
			state.map = action.payload;
		},
		changeProvider: (state, action) => {
			state.provider = action.payload;
		},
		changeLayer: (state, action) => {
			state.layer = action.payload;
		},
	},
});

export const { changeMap } = mapSlice.actions;
export const { changeProvider } = mapSlice.actions;
export const { changeLayer } = mapSlice.actions;
export const selectMap = (state) => state.map.map;
export const selectProvider = (state) => state.map.provider;
export const selectLayer = (state) => state.map.layer;
export default mapSlice.reducer;
