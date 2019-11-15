import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  padding: 2%;
  height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  color: white;

  &:hover{
    color: #297729;
  }  
`; 

const SubHeader = styled(Header)`
  color: #990000;
`

function App() {
  return (
    <Container>
      <Header>Welcome to styled component!</Header>
      <SubHeader>Hello</SubHeader>
    </Container>
  );
}

export default App;
