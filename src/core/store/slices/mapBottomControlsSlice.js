import { createSlice } from '@reduxjs/toolkit';

import { DECIMAL } from '@core/constants/latLngFormats';
import { UP } from '@core/constants/mapBottomControlsClasses';

export const mapBottomControlsSlice = createSlice({
	name: 'mapBottomControls',
	initialState: {
		latLngFormat: DECIMAL,
		mapBottomControlsClass: UP,
	},
	reducers: {
		changeLatLngFormat: (state, action) => {
			state.latLngFormat = action.payload;
		},
		changeMapBottomControlsClass: (state, action) => {
			state.mapBottomControlsClass = action.payload;
		},
	},
});

export const { changeLatLngFormat } = mapBottomControlsSlice.actions;
export const { changeMapBottomControlsClass } = mapBottomControlsSlice.actions;
export const selectLatLngFormat = (state) =>
	state.mapBottomControls.latLngFormat;
export const selectMapBottomControlsClass = (state) =>
	state.mapBottomControls.mapBottomControlsClass;
export default mapBottomControlsSlice.reducer;
