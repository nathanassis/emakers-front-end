import React from 'react';
import Container from './components/section';
import Button from './components/button';

function App(): JSX.Element {
  return (
    <Container>
      <Button
        name="foo"
        type="button"
      >
        Cadastrar
      </Button>
    </Container>
  );
}

export default App;
