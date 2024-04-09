import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Input } from './Components/Input';
import { Heading } from './Components/Heading';
import { Container } from './Components/Container';
import { Status } from './Components/Status';
const person = {
  firstname: 'sanjay',
  lastname: 'pakale'
}

const personList = [
  {
    firstName: 'sanjay',
    lastName: 'pakale'
  },
  {
    firstName: 'Harsha',
    lastName: 'pakale'
  }
]
function App() {
  return (
    <div className="App">
      <Greet name="Sanjay" isLoggedIn={true} lastLoggedInTime='09/04/2024'></Greet>
      <Person name={person}></Person>
      <PersonList names={personList} />
      <Input value='test' onchange={() => {
        console.log("Value changed");
      }} />

      <Heading>Added Heading </Heading>
      <Container styles={{ 'backgroundColor': 'red', padding: '2px' }}></Container>
      <Status status="success"></Status>

    </div>
  );
}

export default App;
