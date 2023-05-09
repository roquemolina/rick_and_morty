const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    if(!id) throw new Error ("Faltan datos");
    const deletedUser = await Favorite.findByPk(id);
    await deletedUser.destroy();
    res.status(200).send(allFavs);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = deleteFav;