import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './Username';
import favouritesReducer from './Favourites';

export interface StateValue {
  username: string;
  favourites: Array<number>;
}

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    favourites: favouritesReducer,
  },
});
