const getCharById = require("../controllers/getCharById");
const deleteFav  = require("../controllers/handleFavorites");
const postFav  = require("../controllers/handleFavorites");
const express = require('express');
const getLogin = require("../controllers/login");
const router = express.Router();

router.get('/character/:id', (req, res) => {
  getCharById(req, res);
})

router.get('/login', (req, res) => {
  const {email, password} = req.query;
  try {
    const newLogin = getLogin(email, password);
    res.status(200).json({access: true})
  } catch (error) {
    res.status(400).json({access: false})
    }
})

router.post('/fav', (req, res) => {
  postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
  deleteFav(req, res);
})
module.exports = router;


