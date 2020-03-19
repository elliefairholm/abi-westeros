const { BACK_END_URI } = require('../config')

export default async (user) => {
  const name = user.name.split(' ');
  const location = 'es';
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'x-api-key': 'kMnPR5cq5M6L91XQaQtASa9TKOJ5pmFYi73kmVch'
    },
    body: JSON.stringify({
      "firstName": name[0],
      "lastName": name[1],
      "origin": location,
      "location": location,
      "country": location,
      "physicianCountry": location,
      "language": location,
      "gender": user.gender,
      "partnerName": user.name
    })
  }
  return await fetch(`${BACK_END_URI}/invite-user`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.error(err)
      return 'Unable to invite user.';
    });
}