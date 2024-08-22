import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCatsApi } from '../api/cats-api';
import { TCat } from '../types';

type TCatsState = {
	items: TCat[] | [];
	onlyLiked: boolean;
	loading: boolean;
	error: string | null | undefined;
};

const initialState: TCatsState = {
	items: [],
	onlyLiked: false,
	loading: false,
	error: null,
};

export const getCatsThunk = createAsyncThunk('cats/getCats', async () =>
	getCatsApi()
);

const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		likeItem: (
			state,
			action: PayloadAction<{ id: string; isLike: boolean }>
		) => {
			state.items = state.items.map((item) => {
				return item.id === action.payload.id
					? { ...item, isLike: !action.payload.isLike }
					: item;
			});
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		setOnlyLiked: (state, action: PayloadAction<boolean>) => {
			state.onlyLiked = action.payload;
		},
	},
	selectors: {
		getCatsSelector: (state) => state.items,
		getLoadingSelector: (state) => state.loading,
		getOnyLikedSelector: (state) => state.onlyLiked,
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
				state.items = [
					...action.payload.map((item) => {
						return { ...item, breeds: item.breeds[0], isLike: false };
					}),
				];
			});
	},
});

export const catsReducer = catsSlice.reducer;
export const { getCatsSelector, getLoadingSelector, getOnyLikedSelector } =
	catsSlice.selectors;
export const { likeItem, removeItem, setOnlyLiked } = catsSlice.actions;
