var router = require('express').Router();
const request = require('request');
const pokemonsCtrl = require('../controllers/pokemons');

router.get('/', pokemonsCtrl.index);
router.get('/new', pokemonsCtrl.new);
router.post('/', pokemonsCtrl.create);
router.get('/:id', pokemonsCtrl.show);


module.exports = router;