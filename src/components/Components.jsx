import { useState } from "react";
import container from "./styles.module.css"

export function Element({ text, isEven }) {
  return isEven ? <b>{text}</b> : <p>{text}</p>
}

export function Container({ initialElements }) {
  let [elements, changeElements] = useState(initialElements)
  let addElement = (key) => {
    changeElements(prev => [...prev, { key: key, text: "Element #" + (key + 1) }])
  }
  return (
    <div className={container.container}>
      <Button addElementCallback={addElement} />
      {elements.map(element => (<Element key={element.key} text={element.text} isEven={(element.key + 1) % 2 === 0} />))}
    </div>
  );
}

export function Button({ addElementCallback }) {
  let [count, changeCount] = useState(0)
  let onClick = () => {
    addElementCallback(count)
    changeCount(count + 1)
  }

  return (
    <button onClick={() => onClick()}>Add element</button>
  )
}
