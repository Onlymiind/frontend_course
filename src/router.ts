import { createBrowserRouter } from 'react-router';
import { FilmsPage } from './containers/FilmsPage';
import { UsernamePage } from './containers/UsernamePage';
import { FavouritesPage } from './containers/FavouritesPage';
import { App } from './containers/App';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/films',
        Component: FilmsPage,
      },
      {
        path: 'set_username',
        Component: UsernamePage,
      },
      {
        path: 'favourites',
        Component: FavouritesPage,
      },
    ],
  },
]);
