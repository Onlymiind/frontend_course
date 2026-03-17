import type { FilmInfo } from '../utils/kinopoisk';
import style from './styles.module.css';
import { formatFilmName } from '../utils/utils';
import { useNavigate } from 'react-router';

export function FilmCard(film: FilmInfo): React.JSX.Element {
  const navigate = useNavigate();

  const navigateToFilm = () => {
    navigate('/film/' + film.kinopoiskId.toString());
  };

  return (
    <div className={style.film} key={film.kinopoiskId} onClick={navigateToFilm}>
      <img
        src={film.getPoster()}
        alt='film poster'
        className={style.filmCardImage}
      ></img>
      <p className={style.filmName}>{formatFilmName(film)}</p>
    </div>
  );
}
