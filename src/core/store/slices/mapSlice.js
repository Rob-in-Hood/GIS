import { createSlice } from '@reduxjs/toolkit';

import { CARTODB_VOYAGER } from '@core/constants/mapProviders';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		map: null,
		provider: CARTODB_VOYAGER,
	},
	reducers: {
		changeMap: (state, action) => {
			state.map = action.payload;
		},
		changeProvider: (state, action) => {
			state.provider = action.payload;
		},
	},
});

export const { changeMap } = mapSlice.actions;
export const { changeProvider } = mapSlice.actions;
export const selectMap = (state) => state.map.map;
export const selectProvider = (state) => state.map.provider;
export default mapSlice.reducer;
