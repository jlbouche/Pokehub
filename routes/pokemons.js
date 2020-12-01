const express = require('express');
const router = express.Router();
const pokemonsCtrl = require('../controllers/pokemons');

router.get('/', pokemonsCtrl.index);
router.get('/new', pokemonsCtrl.new);
router.get('/:id', pokemonsCtrl.show);
router.post('/', pokemonsCtrl.create);

module.exports = router;
