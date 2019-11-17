import React from 'react';
import styled from 'styled-components';
import { Materials } from './Materials';

const Wrapper = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <h1>Medžiagų mokslo įvadas</h1>
      <Materials />
    </Wrapper>
  );
}

export default App;
