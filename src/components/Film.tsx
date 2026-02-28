import type { Film } from '../utils/kinopoisk';
import style from './styles.module.css';

function formatFilmName(film: Film): string {
  if (film.nameRu && film.nameEn) {
    return film.nameRu + ' (' + film.nameEn + ') - ' + film.year;
  } else {
    return (film.nameRu ? film.nameRu : film.nameEn) + ' - ' + film.year;
  }
}

export function FilmElement(film: Film): React.JSX.Element {
  return (
    <div className={style.film}>
      {film.posterUrlPreview.match(/\/no-poster.png$/) ? (
        <></>
      ) : (
        <img src={film.posterUrlPreview} alt='film poster'></img>
      )}
      <div>
        <h2>{formatFilmName(film)}</h2>
      </div>
    </div>
  );
}
