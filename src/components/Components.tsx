import { useState } from 'react';
import container from './styles.module.css';

interface ElementData {
  key: number;
  text: string;
  isEven: boolean;
}

export function Element(data: ElementData): React.JSX.Element {
  return data.isEven ? <b>{data.text}</b> : <p>{data.text}</p>;
}

export function Container({
  initialElements,
}: {
  initialElements: Array<ElementData>;
}): React.JSX.Element {
  const [elements, changeElements] =
    useState<Array<ElementData>>(initialElements);
  const addElement = (key: number) => {
    changeElements([
      ...elements,
      { key: key, text: 'Element #' + (key + 1) } as ElementData,
    ]);
  };
  return (
    <div className={container.container}>
      <Button addElementCallback={addElement} />
      {elements.map((element) => (
        <Element
          key={element.key}
          text={element.text}
          isEven={(element.key + 1) % 2 === 0}
        />
      ))}
    </div>
  );
}

export function Button({
  addElementCallback,
}: {
  addElementCallback: (newKey: number) => void;
}): React.JSX.Element {
  const [count, changeCount] = useState<number>(0);
  const onClick = () => {
    addElementCallback(count);
    changeCount(count + 1);
  };

  return <button onClick={() => onClick()}>Add element</button>;
}
