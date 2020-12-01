const express = require('express');
const router = express.Router();
const pokemonsCtrl = require('../controllers/pokemons');

router.get('/', pokemonsCtrl.index);
router.get('/new', pokemonsCtrl.new);
router.post('/', pokemonsCtrl.create);
router.get('/_id', pokemonsCtrl.show);

module.exports = router;
