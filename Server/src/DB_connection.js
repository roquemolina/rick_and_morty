require('dotenv').config();
const FavoriteModel = require("./models/Favorite")
const UserModel = require("./models/User");
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   /* `postgres://postgres:250506!@localhost:5432/rickandmorty`, */
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//Fav
FavoriteModel(sequelize);
//user
UserModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through: "user_favorite"});


module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
