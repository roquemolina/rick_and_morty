const users = require("../utils/user");

const getLogin = (email, password) => {
  const getAccess = users.filter(user => user.email === email && user.password === password);
  if(getAccess.length === 0)
  throw Error (
    {access: false}
  );
  return getAccess;
};

module.exports = getLogin;