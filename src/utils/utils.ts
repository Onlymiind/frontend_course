import type { FilmInfo } from './kinopoisk';

export async function get(url: string, init?: RequestInit): Promise<any> {
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error('API response not OK, url: ' + url);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Failed to get API response: ' + error);
    throw error;
  }
}

export function formatFilmName(film: FilmInfo): string {
  if (film.nameRu && film.nameOriginal) {
    return film.nameRu + ' (' + film.nameOriginal + ') - ' + film.year;
  } else {
    return (film.nameRu ? film.nameRu : film.nameOriginal) + ' - ' + film.year;
  }
}
