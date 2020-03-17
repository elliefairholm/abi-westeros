import React from 'react';
import './CharacterInfo.css';
import imageSource from '../../../utils'

function CharacterTile ({ character, handleClick }) {

  return (
    <div className="character-info-container">
      <p><span className="bold">Name: </span>{character.name}</p>
      <p><span>Born: </span> {character.born}</p>
      <p><span>Title: </span> {character.titles[1] || character.titles[0]}</p>
      <p><span>Actor: </span> {character.playedBy[0]}</p>
      <img className="invite-link" src={imageSource('invite-text')} alt="Invite to ABI Button" onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default CharacterTile;
