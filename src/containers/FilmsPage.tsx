import { FilmElement } from '../components/Film';
import { Filter } from '../components/Filter';
import { Search } from '../components/Search';
import { FilmTypes, getFilmList, type Film } from '../utils/kinopoisk';
import styles from './styles.module.css';
import { useState, useEffect } from 'preact/hooks';

class FilmsPageState {
  films: Array<Film> = [];
  searchText?: string;
  filterCategory: string;

  constructor(
    films: Array<Film>,
    searchText?: string,
    filterCategory?: string,
  ) {
    this.films = films;
    this.searchText = searchText;
    this.filterCategory =
      filterCategory === undefined ? FilmTypes.ALL : filterCategory;
  }
}

export function FilmsPage(): React.JSX.Element {
  const [state, setState] = useState<FilmsPageState>(new FilmsPageState([]));

  useEffect(() => {
    (async () => {
      const films = await getFilmList();
      setState(new FilmsPageState(films));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const films = await getFilmList(state.searchText, state.filterCategory);
      setState(
        new FilmsPageState(films, state.searchText, state.filterCategory),
      );
    })();
  }, [state.filterCategory]);

  useEffect(() => {
    // NOTE: don't call API on EVERY typed character
    const timeoutId = setTimeout(async () => {
      const films = await getFilmList(state.searchText, state.filterCategory);
      setState(
        new FilmsPageState(films, state.searchText, state.filterCategory),
      );
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [state.searchText]);

  const setFilterCategory = (category: string) => {
    setState(new FilmsPageState(state.films, state.searchText, category));
  };

  const setSearchText = (text?: string) => {
    setState(new FilmsPageState(state.films, text, state.filterCategory));
  };

  return (
    <>
      <label>Поиск по названию:</label>
      <Search callback={setSearchText} />
      <br></br>
      <label>Фильтровать по категории:</label>
      <Filter callback={setFilterCategory} />
      <br></br>
      <div className={styles.films}>
        {state.films
          .filter((film: Film) => film.nameRu || film.nameEn)
          .map((film: Film) => (
            <FilmElement key={film.kinopoiskId} {...film}></FilmElement>
          ))}
      </div>
    </>
  );
}
