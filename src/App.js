import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  padding: 2%;
  height: 100vh;
  text-align: center;
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

const Button = styled.button`
  text-align: center;
  color: ${props => props.info ? "white" : "green"};
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1%;
`; 

function App() {
  return (
    <Container>
      <Header>Welcome to styled component!</Header>
      <SubHeader>Hello</SubHeader>
      <Button>Start</Button>
      <Button info>Cancel</Button>
    </Container>
  );
}

export default App;
