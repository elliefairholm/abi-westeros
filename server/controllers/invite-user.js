const fetch = require('node-fetch');

const BASE_URL = 'https://api-dev.abi.ai/v1';

const inviteUser = async (req, res) => {
  try {
    fetch(`${BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'kMnPR5cq5M6L91XQaQtASa9TKOJ5pmFYi73kmVch'
      },
      body: JSON.stringify(req.body)
    })
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => res.json())
      .then(result => {
        res.status(200);
        res.send(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(403);
        res.send('An error occured when inviting the user.');
      });
  } catch (err) {
    console.error(err)
  }
}

module.exports = inviteUser;