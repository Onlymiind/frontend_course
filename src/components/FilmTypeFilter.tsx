import { MenuItem, Select } from '@mui/material';
import { FilmTypeDisplayNames, FilmTypes } from '../utils/kinopoisk';
import { useState } from 'preact/hooks';

export interface FilterProps {
  callback: (category: string) => void;
}

export function Filter(props: FilterProps): React.JSX.Element {
  const [selected, setSelected] = useState(FilmTypes.ALL);

  return (
    <Select
      label='Категория'
      value={selected}
      onChange={(event) => {
        const selectedType = (event.target as any).value;
        setSelected(selectedType);
        props.callback(selectedType);
      }}
    >
      {[...FilmTypeDisplayNames.entries()].map((entry) => {
        const [type_, displayText] = entry;
        return type_ === FilmTypes.ALL ? (
          <MenuItem value={type_}>{displayText}</MenuItem>
        ) : (
          <MenuItem value={type_}>{displayText}</MenuItem>
        );
      })}
    </Select>
  );
}
