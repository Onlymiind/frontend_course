import { FilmCard } from '../components/FilmCard';
import { Filter } from '../components/FilmTypeFilter';
import { TextInput } from '../components/TextInput';
import { FilmType, getFilmList, type FilmInfo } from '../utils/kinopoisk';
import styles from './styles.module.css';
import { useState, useEffect } from 'preact/hooks';

class FilmSearchPageState {
  films: Array<FilmInfo> = [];
  searchText?: string;
  filterType: FilmType;

  constructor(
    films: Array<FilmInfo>,
    searchText?: string,
    filterType?: FilmType,
  ) {
    this.films = films;
    this.searchText = searchText;
    this.filterType = filterType === undefined ? FilmType.ALL : filterType;
  }
}

async function updateFilmsList(
  searchText: string | undefined,
  filterType: FilmType,
): Promise<FilmSearchPageState> {
  if (searchText === undefined || searchText.length === 0) {
    return new FilmSearchPageState([]);
  }
  const films = await getFilmList(searchText, filterType);
  return new FilmSearchPageState(films, searchText, filterType);
}

export function FilmSearchPage(): React.JSX.Element {
  const [state, setState] = useState<FilmSearchPageState>(
    new FilmSearchPageState([]),
  );

  useEffect(() => {
    // NOTE: needed to not call API on EVERY typed character
    const timeoutId = setTimeout(async () => {
      setState(await updateFilmsList(state.searchText, state.filterType));
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [state.searchText, state.filterType]);

  const setFilterType = (type_: FilmType) => {
    setState(new FilmSearchPageState(state.films, state.searchText, type_));
  };

  const setSearchText = (text?: string) => {
    setState(new FilmSearchPageState(state.films, text, state.filterType));
  };

  return (
    <>
      <h2>
        <b>Поиск фильма</b>
      </h2>
      <TextInput callback={setSearchText} label='Поиск по названию' />
      <Filter callback={setFilterType} />
      <br></br>
      <div className={styles.films}>
        {state.films
          .filter((film: FilmInfo) => film.nameRu || film.nameOriginal)
          .map((film: FilmInfo) => (
            <FilmCard key={film.kinopoiskId} {...film}></FilmCard>
          ))}
      </div>
    </>
  );
}
