import React from 'react';
import './CharacterList.css';
import CharacterTile from '../CharacterTile';

function CharacterList ({ characterList }) {

  if (characterList === 'Unable to fetch API data.') {
    return (
      <div className="character-list-message-container">
        <p>Could not fetch API data.</p>
      </div>
    )
  } else if (!characterList) {
    return (
      <div className="character-list-message-container">
        <p>Loading character list...</p>
      </div>
    )
  } else {
    return (
      <div className="character-list-container">
        {characterList.map((character, index) => {
          return <CharacterTile character={character} key={index}></CharacterTile>
        })}
      </div>
    );
  }

}

export default CharacterList;
