let myFavorites = [];
let allCharacters = [];

const postFav = (req, res) => {
  const newChar = req.body;
  myFavorites.push(req.body);
  allCharacters.push(req.body);
  res.status(200).json(newChar);
};

const deleteFav = (req, res) => {
  const delCharId = req.params;
  myFavorites.map(char => char.id !== delCharId)
  allCharacters.map(char => char.id !== delCharId)
  res.status(200).json(myFavorites);
};

module.exports = postFav, deleteFav;