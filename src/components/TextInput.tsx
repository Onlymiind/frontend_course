import { TextField } from '@mui/material';

export interface TextInputProps {
  callback: (text: string) => void;
  label: string;
}

export function TextInput(props: TextInputProps): React.JSX.Element {
  return (
    <TextField
      label={props.label}
      type='outlined'
      onInput={(event) => props.callback((event.target as any).value)}
    ></TextField>
  );
}
