import { useEffect, useState } from 'preact/hooks';

export interface SearchProps {
  callback: (text: string) => void;
}

export function Search(props: SearchProps): React.JSX.Element {
  return (
    <input
      type='text'
      onInput={(event) => props.callback((event.target as any).value)}
    ></input>
  );
}
