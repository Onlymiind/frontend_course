import { createBrowserRouter } from 'react-router';
import { AllFilmsPage } from './containers/AllFilmsPage';
import { UsernamePage } from './containers/UsernamePage';
import { FilmSearchPage } from './containers/FilmSearchPage';
import { FavouritesPage } from './containers/FavouritesPage';
import { App } from './containers/App';
import { FilmPage } from './containers/FilmPage';
import { MainPage } from './containers/MainPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          index: true,
          Component: MainPage,
        },
        {
          path: '/films',
          Component: AllFilmsPage,
        },
        {
          path: '/set_username',
          Component: UsernamePage,
        },
        {
          path: '/favourites',
          Component: FavouritesPage,
        },
        {
          path: '/search_films',
          Component: FilmSearchPage,
        },
        {
          path: 'film/:kinopoiskID',
          Component: FilmPage,
        },
      ],
    },
  ],
  { basename: '/frontend_course' },
);
