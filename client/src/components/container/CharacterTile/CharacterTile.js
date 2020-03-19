import React, { useState } from 'react';
import './CharacterTile.css';
import CharacterInfo from '../../presentational/CharacterInfo';
import SuccessfulSubmit from '../../presentational/SuccessfulSubmit'
import imageSource from '../../../utils'
import ApiClient from '../../../services';

function CharacterTile ({ character }) {

  const [invited, setInvited] = useState(false);

  const handleClick = (character) => {
    ApiClient.inviteUser(character)
      .then(res => {
        if (res.user) {
          setInvited(!invited);
        } else {
          window.alert(res);
        }
      });
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
