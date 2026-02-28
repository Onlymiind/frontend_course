import { FilmTypeDisplayNames, FilmTypes } from '../utils/kinopoisk';

export interface FilterProps {
  callback: (category: string) => void;
}

export function Filter(props: FilterProps): React.JSX.Element {
  return (
    <select onChange={(event) => props.callback((event.target as any).value)}>
      {[...FilmTypeDisplayNames.entries()].map((entry) => {
        const [type_, displayText] = entry;
        return type_ === FilmTypes.ALL ? (
          <option selected value={type_}>
            {displayText}
          </option>
        ) : (
          <option value={type_}>{displayText}</option>
        );
      })}
    </select>
  );
}
