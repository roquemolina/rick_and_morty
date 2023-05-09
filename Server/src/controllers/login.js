const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const {email, password} = req.query;
    if(!email || !password) throw new Error ("Faltan datos");
    const user = await User.findOne({ where: { email: email } });
    if(!user) throw new Error ("Usuario no encontrado");
    if(user.password !== password) throw new Error ("Contraseña incorrecta");
    res.status(200).json({access: true});
  } catch (error) {
    res.status(403).send(error.message);
  }
}

module.exports = login;


/* const users = require("../utils/user");

const getLogin = (email, password) => {
  const getAccess = users.filter(user => user.email === email && user.password === password);
  if(getAccess.length === 0)
  throw Error (
    {access: false}
  );
  return getAccess;
};

module.exports = getLogin; */