const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender, userId} = req.body;
    if(!name || !origin || !status || !image || !species || !gender) throw new Error ("Faltan datos");
    const newUser = await User.findOrCreate({
      where: {name: name}
    });
    newUser.setUser(userId);
    const allFavs = await Favorite.findAll();
    res.status(200).send(allFavs);
  } catch (error) {
    res.status(402).send(error.message);
  }
}

module.exports = postFav;