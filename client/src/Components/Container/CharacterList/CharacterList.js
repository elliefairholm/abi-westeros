import React from 'react';
import './CharacterList.css';
import CharacterTile from '../CharacterTile';

function CharacterList ({ characterList }) {

  if (characterList.length > 0) {
    return (
      <div className="character-list-container">
        {characterList.map((character, index) => {
          return <CharacterTile character={character} key={index}></CharacterTile>
        })}
      </div>
    );
  } else {
    return null
  }

}

export default CharacterList;
