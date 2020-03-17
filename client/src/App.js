import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/presentational/Header';
import CharacterList from './components/container/CharacterList';

import ApiClient from './services';

function App () {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    ApiClient.getCharacterList()
      .then(characterList => {
        setCharacterList(characterList);
      });
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <CharacterList characterList={characterList}></CharacterList>
    </div>
  );

}

export default App;
