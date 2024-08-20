import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCatsApi } from '../api/cats-api';
import { TCat } from '../types';

type TCatsState = {
	items: TCat[] | [];
	loading: boolean;
	error: string | null | undefined;
};

const initialState: TCatsState = {
	items: [],
	loading: false,
	error: null,
};

export const getCatsThunk = createAsyncThunk('cats/getCats', async () =>
	getCatsApi()
);

const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {},
	selectors: {
		getCatsSelector: (state) => state.items,
		getLoadingSelector: (state) => state.loading,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCatsThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCatsThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getCatsThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.items = [...action.payload];
			});
	},
});

export const catsReducer = catsSlice.reducer;
export const { getCatsSelector, getLoadingSelector } = catsSlice.selectors;
