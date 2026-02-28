import { get } from './utils';

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = 'https://kinopoiskapiunofficial.tech/api/v2.2';

const headers = {
  'X-API-KEY': apiKey,
  'Content-Type': 'application/json',
} as HeadersInit;

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export const FilmTypes = {
  FILM: 'FILM',
  TV_SHOW: 'TV_SHOW',
  TV_SERIES: 'TV_SERIES',
  MINI_SERIES: 'MINI_SERIES',
  ALL: 'ALL',
};

export const FilmTypeDisplayNames = new Map<string, string>([
  ['FILM', 'Фильмы'],
  ['TV_SHOW', 'Телепрограммы'],
  ['TV_SERIES', 'Сериалы'],
  ['MINI_SERIES', 'Мини сериалы'],
  ['ALL', 'Все'],
]);

export interface Film {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Array<Country>;
  genres: Array<Genre>;
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export async function getFilmList(
  searchText?: string,
  filterCategory?: string,
): Promise<Array<Film>> {
  const params = [];
  if (searchText) {
    params.push(['keyword', searchText]);
  }
  if (filterCategory) {
    params.push(['type', filterCategory]);
  }

  return (
    await get(baseURL + `/films?${new URLSearchParams(params).toString()}`, {
      headers: headers,
    })
  ).items;
}
