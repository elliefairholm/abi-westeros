const { BACK_END_URI } = require('../config/');

export default async () => {
  return await fetch(`${BACK_END_URI}/character-list`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.error(err)
      return 'Unable to fetch API data.';
    });
}