const Researcher = require('../models/researcher');

module.exports = {
    index,
    new: newPokemon,
    addTeam
}

function index(req, res) {
    Researcher.find({}, function(err, researchers) {
      res.render('researchers/index', { title: 'Your Researcher Profile', researchers });
    });
}

function newPokemon(req, res) {
    res.render('pokemons/new', { title: 'Add Pokemon to Pokedex'});
}