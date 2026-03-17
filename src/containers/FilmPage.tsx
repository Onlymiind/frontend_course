import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'preact/compat';
import {
  getFilmInfo,
  type FilmInfo,
  type FullFilmInfo,
} from '../utils/kinopoisk';
import { formatFilmName } from '../utils/utils';
import style from './styles.module.css';
import type { StateValue } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Rating } from '@mui/material';
import { addToFavourites, removeFromFavourites } from '../store/Favourites';

export function FilmPage(): React.JSX.Element {
  const params = useParams();
  const [film, setFilm] = useState<FullFilmInfo | null>(null);

  useEffect(() => {
    (async () => {
      setFilm(await getFilmInfo(parseInt(params.kinopoiskID as string)));
    })();
  }, [params.kinopoiskID]);

  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useSelector((state: StateValue) => state.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavourite(
      favourites.findIndex(
        (favFilm: FilmInfo) =>
          film !== null && favFilm.kinopoiskId === film.kinopoiskId,
      ) !== -1,
    );
  }, [favourites, film]);

  const addSelfToFavourites = () => {
    dispatch(addToFavourites(film));
  };

  const removeSelfFromFavourites = () => {
    dispatch(removeFromFavourites(film));
  };

  const navigateBack = () => navigate(-1);

  return film === null ? (
    <h2>Загрузка...</h2>
  ) : (
    <>
      <h2>{formatFilmName(film)}</h2>
      <div className={style.filmInfo}>
        <img
          src={film.getPoster()}
          alt='film poster'
          className={style.filmInfoImage}
        ></img>
        <div>
          <h3>Описание:</h3>
          <p>{film.description ? film.description : 'Отсутствует'}</p>
          <Rating
            max={10}
            value={film.ratingKinopoisk}
            precision={0.1}
            readOnly={true}
          ></Rating>
          <div className={style.filmInfoButtons}>
            <Button onClick={navigateBack} variant='outlined'>
              Назад
            </Button>
            <Button href={film.webUrl} variant='outlined'>
              Перейти на Кинопоиск
            </Button>
            {isFavourite ? (
              <Button onClick={removeSelfFromFavourites} variant='outlined'>
                Удалить из избранного
              </Button>
            ) : (
              <Button onClick={addSelfToFavourites} variant='outlined'>
                Добавить в избранное
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
