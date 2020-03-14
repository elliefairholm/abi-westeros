export default async () => {
  return await fetch('http://localhost:3002/character-list')
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.error(err)
    });
}