const axios = require('axios');

function getCharById(res, id) {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(
    (response) => {response.data},
  )
  .then()


}

module.exports = {getCharById};