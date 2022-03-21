import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
	name: 'map',
	initialState: {
		map: null,
		curLayer: null,
	},
	reducers: {
		changeMap: (state, action) => {
			state.map = action.payload;
		},
		changeCurLayer: (state, action) => {
			state.curLayer = action.payload;
		},
	},
});

export const { changeMap } = mapSlice.actions;
export const { changeCurLayer } = mapSlice.actions;
export const selectMap = (state) => state.map.map;
export const selectCurLayer = (state) => state.map.curLayer;
export default mapSlice.reducer;
