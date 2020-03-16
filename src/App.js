import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';


const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedPeople] = useState([]);
  const activeUser = 0;

  switch (action) {
    case 'ADD_TO_LIKED_USER':
      break;
    case 'ADD_TO_DISLIKED_USER':
      break;
    case 'ADD_TO_SUPERLIKED_USER':

    default:
      return people;
  }

  return (
    <div className="app">
      <Header />
      <p>Finder!</p>
      {people[1] ? (
        <Person
          key={person[1].id}
          person={person[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ): (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )
    }
    </div>
  )
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
