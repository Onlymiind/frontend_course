import { useEffect, useState } from 'preact/hooks';
import type { Film } from '../utils/kinopoisk';
import style from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { StateValue } from '../store/store';
import { addToFavourites, removeFromFavourites } from '../store/Favourites';
import { Box, Button } from '@mui/material';

function formatFilmName(film: Film): string {
  if (film.nameRu && film.nameEn) {
    return film.nameRu + ' (' + film.nameEn + ') - ' + film.year;
  } else {
    return (film.nameRu ? film.nameRu : film.nameEn) + ' - ' + film.year;
  }
}

export function FilmElement(film: Film): React.JSX.Element {
  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useSelector((state: StateValue) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavourite(
      favourites.findIndex(
        (favFilm: Film) => favFilm.kinopoiskId === film.kinopoiskId,
      ) !== -1,
    );
  }, [favourites]);

  const addSelfToFavourites = () => {
    dispatch(addToFavourites(film));
  };

  const removeSelfFromFavourites = () => {
    dispatch(removeFromFavourites(film));
  };

  return (
    <Box className={style.film}>
      {film.posterUrlPreview.match(/\/no-poster.png$/) ? (
        <></>
      ) : (
        <img src={film.posterUrlPreview} alt='film poster'></img>
      )}
      <p className={style.filmName}>{formatFilmName(film)}</p>
      {isFavourite ? (
        <Button onClick={removeSelfFromFavourites}>
          Удалить из избранного
        </Button>
      ) : (
        <Button onClick={addSelfToFavourites}>Добавить в избранное</Button>
      )}
    </Box>
  );
}
