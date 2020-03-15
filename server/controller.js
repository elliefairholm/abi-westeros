const fetch = require('node-fetch');

const BASE_URL = 'https://anapioficeandfire.com/api/characters/?name='

const exampleCharacters = ['Daenerys Targaryen', 'Arya Stark', 'Cersei Lannister', 'Theon Greyjoy'];

const getCharacterList = async (req, res) => {
  const response = [];
  try {
    await Promise.all(exampleCharacters.map(async (character) => {
      return await fetch(`${BASE_URL}${character}`)
        .then(res => res.json())
        .then(res => {
          if (character === 'Daenerys Targaryen') {
            response.push(res[1])
          } else {
            response.push(res[0])
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }))
    res.status(200);
    res.send(response);
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getCharacterList
}