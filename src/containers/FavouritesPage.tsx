import type React from 'preact/compat';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import type { StateValue } from '../store/store';
import type { Film } from '../utils/kinopoisk';
import { FilmElement } from '../components/Film';

export function FavouritesPage(): React.JSX.Element {
  const favourites = useSelector((state: StateValue) => state.favourites);

  return (
    <Box>
      {favourites.length === 0 ? (
        <p>Вы не добавили ни одного фильма в избранное</p>
      ) : (
        favourites.map((film: Film) => (
          <FilmElement key={film.kinopoiskId} {...film} />
        ))
      )}
    </Box>
  );
}
