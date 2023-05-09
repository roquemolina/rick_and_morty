const axios = require('axios');

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character',
API_KEY = '63c4e80e9996.753191aab329ade011ee',
URL_BASE_N = "https://rickandmortyapi.com/api/character/"


async function getCharById(req, res) {
  const { id } = req.params;
  try {
    let response = await axios.get(`${URL_BASE_N}/${id}`);
      let data = response.data;
      let objData = {
        "id" : data.id,
        "name" : data.name,
        "status": data.status,
        "species": data.species,
        "gender": data.gender,
        "origin": data.origin,
        "image": data.image,
      }
    return res.status(200).json(objData);
  } catch (err) {
    return res.status(401).json({error: err.message})
  }
/* function getCharById(req, res) {
  const { id }= req.params;
  axios.get(`${URL_BASE}/${id}?key=${API_KEY}`)
  .then(
    (response) => {
      let data = response.data;
      let objData = {
        'id' : data.id,
        'name' : data.name,
        'status': data.status,
        'species': data.species,
        'gender': data.gender,
        'origin': data.origin,
        'image': data.image,
      }
    return res.status(200).json(objData);
    }
  )
  .catch(err => {
    return res.status(500).json({error: err.message})
  }) */
}

module.exports = getCharById;