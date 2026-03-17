import type React from 'preact/compat';
import { useSelector } from 'react-redux';
import type { StateValue } from '../store/store';
import type { FilmInfo } from '../utils/kinopoisk';
import { FilmCard } from '../components/FilmCard';
import style from './styles.module.css';

export function FavouritesPage(): React.JSX.Element {
  const favourites = useSelector((state: StateValue) => state.favourites);

  return (
    <div className={style.films}>
      {favourites.length === 0 ? (
        <h2>Вы не добавили ни одного фильма в избранное</h2>
      ) : (
        favourites.map((film: FilmInfo) => (
          <FilmCard key={film.kinopoiskId} {...film} />
        ))
      )}
    </div>
  );
}
