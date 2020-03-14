import React from 'react';
import './CharacterInfo.css';

function imageSource (name) {
  return require(`../../../assets/${name}.png`);
}

function CharacterTile ({ character, handleClick }) {

  return (
    <div className="character-info-container">
      <p><span className="bold">Name: </span>{character.name}</p>
      <p><span>Born: </span> {character.born}</p>
      <p><span>Title: </span> {character.titles[1] || character.titles[0]}</p>
      <p><span>Actor: </span> {character.playedBy[0]}</p>
      <img className="invite-link" src={imageSource('invite-text')} onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default CharacterTile;