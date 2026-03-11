import { createSlice } from '@reduxjs/toolkit';
import type { Film } from '../utils/kinopoisk';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: new Array<Film>(),
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return [...state.filter((id) => id !== action.payload)];
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
