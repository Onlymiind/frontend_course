import { createSlice } from '@reduxjs/toolkit';
import type { FilmInfo } from '../utils/kinopoisk';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: new Array<FilmInfo>(),
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return [
        ...state.filter(
          (film) => film.kinopoiskId !== action.payload.kinopoiskId,
        ),
      ];
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
