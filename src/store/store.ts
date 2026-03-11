import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './Username';
import favouritesReducer from './Favourites';
import type { Film } from '../utils/kinopoisk';

export interface StateValue {
  username: string;
  favourites: Array<Film>;
}

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    favourites: favouritesReducer,
  },
});
