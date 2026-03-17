import { TextField } from '@mui/material';

export interface TextInputProps {
  callback: (text: string) => void;
  label: string;
}

export function TextInput(props: TextInputProps): React.JSX.Element {
  return (
    <TextField
      label={props.label}
      variant='outlined'
      onInput={(event) => props.callback((event.target as any).value)}
      sx={{
        margin: '5pt',
      }}
    ></TextField>
  );
}
