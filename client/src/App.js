import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './Components/Presentational/Header/';
import CharacterList from './Components/Container/CharacterList';

import ApiClient from './Services/';

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
