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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
