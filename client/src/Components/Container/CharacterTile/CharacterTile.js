import React, { useState } from 'react';
import './CharacterTile.css';
import CharacterInfo from '../../Presentational/CharacterInfo/'
import SuccessfulSubmit from '../../Presentational/SuccessfulSubmit/'
import imageSource from '../../../Utils/'

function CharacterTile ({ character }) {

  const [invited, setInvited] = useState(false);

  const handleClick = (e) => {
    setInvited(!invited);
  }

  const characterImageName = character.name.toLowerCase().replace(' ', '-');

  let secondSection;

  if (!invited) {
    secondSection = <CharacterInfo handleClick={handleClick} character={character}></CharacterInfo>
  } else if (invited) {
    secondSection = <SuccessfulSubmit></SuccessfulSubmit>
  }

  return (
    <div className="character-tile-container">
      <div className="character-image-container">
        <img className="character-image" src={imageSource(characterImageName)} alt={character.name} />
      </div>
      {secondSection}
    </div>
  );
}

export default CharacterTile;
