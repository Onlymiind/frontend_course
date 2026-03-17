import { FilmCard } from '../stories/FilmCard';
import { getFilmList, type FilmInfo } from '../utils/kinopoisk';
import styles from './styles.module.css';
import { useState, useEffect } from 'preact/hooks';

export function AllFilmsPage(): React.JSX.Element {
  const [films, setFilms] = useState<Array<FilmInfo>>([]);

  useEffect(() => {
    (async () => setFilms(await getFilmList()))();
  }, []);

  return (
    <div className={styles.films}>
      {films
        .filter((film: FilmInfo) => film.nameRu || film.nameOriginal)
        .map((film: FilmInfo) => (
          <FilmCard key={film.kinopoiskId} {...film}></FilmCard>
        ))}
    </div>
  );
}
