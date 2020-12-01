var express = require('express');
var router = express.Router();
var pokeCtrl = require('../controllers/pokemons');

router.get('/', pokeCtrl.index);
router.get('/new', pokeCtrl.new);
router.get('/:id', pokeCtrl.show);
router.post('/', pokeCtrl.create);

module.exports = router;