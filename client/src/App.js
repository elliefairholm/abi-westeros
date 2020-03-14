import React from 'react';

import './App.css';

import Header from './Components/Presentational/Header/';
import CharacterList from './Components/Container/CharacterList';

// import api service

function App () {

  // state for the people

  // use effect that gets all the people

  return (
    <div className="App">
      <Header></Header>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
