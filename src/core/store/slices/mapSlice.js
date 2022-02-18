import { createSlice } from '@reduxjs/toolkit';

import { CARTODB_VOYAGER } from '@core/constants/mapProviders';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		provider: CARTODB_VOYAGER,
	},
	reducers: {
		changeProvider: (state, action) => {
			state.provider = action.payload;
		},
	},
});

export const { changeProvider } = mapSlice.actions;
export const selectProvider = (state) => state.map.provider;
export default mapSlice.reducer;
