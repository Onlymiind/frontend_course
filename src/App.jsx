function Element({ text }) {
  return <p>{text}</p>
}

function Container({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <Container>
        <Element text="Hello" />
        <Element text="world." />
      </Container>
    </>
  )
}

export default App
