import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		windLayer: null,
		tempLayer: null,
	},
	reducers: {
		changeWindLayer: (state, action) => {
			state.windLayer = action.payload;
		},
		changeTempLayer: (state, action) => {
			state.tempLayer = action.payload;
		},
	},
});

export const { changeWindLayer } = weatherSlice.actions;
export const { changeTempLayer } = weatherSlice.actions;
export const selectWindLayer = (state) => state.weather.windLayer;
export const selectTempLayer = (state) => state.weather.tempLayer;
export default weatherSlice.reducer;
