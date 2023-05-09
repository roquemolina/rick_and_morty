const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(!email || !password) throw new Error ("Faltan datos");
    const newUser = await User.create({email, password});
  
    res.status(200).send(newUser);
  } catch (error) {
    res.status(501).send(error.message); 
  }
}

module.exports = postUser;