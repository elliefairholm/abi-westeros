import React from 'react';
import './CharacterTile.css';

function imageSource (name) {
  return require(`../../../assets/${name.toLowerCase().replace(' ', '-')}.png`);
}

function CharacterTile ({ character }) {

  return (
    <div className="character-tile-container">
      <div className="character-image-container">
        <img src={imageSource(character.name)} alt={character.name}></img>
      </div>
      <div className="character-info-container">
        <p className="name">Name: {character.name}</p>
        <p className="born">Born: {character.born}</p>
        <p className="title">Title: {character.titles[0]}</p>
        <p className="actor">Actor: {character.playedBy[0]}</p>
      </div>
    </div>
  );
}

export default CharacterTile;
