export interface TextInputProps {
  callback: (text: string) => void;
}

export function TextInput(props: TextInputProps): React.JSX.Element {
  return (
    <input
      type='text'
      onInput={(event) => props.callback((event.target as any).value)}
    ></input>
  );
}
