import { MenuItem, Select } from '@mui/material';
import { FilmTypeDisplayNames, FilmType } from '../utils/kinopoisk';
import { useState } from 'preact/hooks';

export interface FilterProps {
  callback: (type_: FilmType) => void;
}

export function Filter(props: FilterProps): React.JSX.Element {
  const [selected, setSelected] = useState(FilmType.ALL);

  return (
    <Select
      label='Категория'
      value={selected}
      variant='outlined'
      onChange={(event) => {
        const selectedType = (event.target as HTMLSelectElement).value;
        setSelected(selectedType as FilmType);
        props.callback(selectedType as FilmType);
      }}
      sx={{
        margin: '5pt',
      }}
    >
      {[...FilmTypeDisplayNames.entries()].map((entry) => {
        const [type_, displayText] = entry;
        return (
          <MenuItem value={type_} key={type_} sx={{ color: '#000000' }}>
            {displayText}
          </MenuItem>
        );
      })}
    </Select>
  );
}
