import { get } from './utils';
import missingPoster from '../assets/missing_poster.png';

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

export enum FilmType {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  TV_SERIES = 'TV_SERIES',
  MINI_SERIES = 'MINI_SERIES',
  ALL = 'ALL',
}

export const FilmTypeDisplayNames = new Map<FilmType, string>([
  [FilmType.FILM, 'Фильмы'],
  [FilmType.TV_SHOW, 'Телепрограммы'],
  [FilmType.TV_SERIES, 'Сериалы'],
  [FilmType.MINI_SERIES, 'Мини сериалы'],
  [FilmType.ALL, 'Все'],
]);

export interface FilmInfo {
  kinopoiskId: number;
  nameRu: string;
  nameOriginal: string;
  year: number;
  type: FilmType;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk: number;

  getPoster: () => string;
}

const emptyUrlRegex = /\/no-poster.png$/;

class FilmInfoImpl implements FilmInfo {
  constructor(
    public kinopoiskId: number,
    public nameRu: string,
    public nameOriginal: string,
    public year: number,
    public type: FilmType,
    public posterUrl: string,
    public posterUrlPreview: string,
    public ratingKinopoisk: number,
  ) {}

  public getPoster = () =>
    !emptyUrlRegex.test(this.posterUrl) ? this.posterUrl : missingPoster;
}

export interface FullFilmInfo extends FilmInfo {
  description: string;
  webUrl: string;
}

class FullFilmInfoImpl extends FilmInfoImpl implements FullFilmInfo {
  constructor(
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    year: number,
    type: FilmType,
    posterUrl: string,
    posterUrlPreview: string,
    ratingKinopoisk: number,
    public description: string,
    public webUrl: string,
  ) {
    super(
      kinopoiskId,
      nameRu,
      nameOriginal,
      year,
      type,
      posterUrl,
      posterUrlPreview,
      ratingKinopoisk,
    );
  }
}

export async function getFilmList(
  searchText?: string,
  filterCategory?: string,
): Promise<Array<FilmInfo>> {
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
  ).items.map(
    (filmInfo: any) =>
      new FilmInfoImpl(
        filmInfo.kinopoiskId,
        filmInfo.nameRu,
        filmInfo.nameOriginal,
        filmInfo.year,
        filmInfo.type,
        filmInfo.posterUrl,
        filmInfo.posterUrlPreview,
        filmInfo.ratingKinopoisk,
      ),
  );
}

export async function getFilmInfo(kinopoiskId: number): Promise<FullFilmInfo> {
  const filmInfo: any = await get(baseURL + `/films/${kinopoiskId}`, {
    headers: headers,
  });
  return new FullFilmInfoImpl(
    filmInfo.kinopoiskId,
    filmInfo.nameRu,
    filmInfo.nameOriginal,
    filmInfo.year,
    filmInfo.type,
    filmInfo.posterUrl,
    filmInfo.posterUrlPreview,
    filmInfo.ratingKinopoisk,
    filmInfo.description,
    filmInfo.webUrl,
  );
}
