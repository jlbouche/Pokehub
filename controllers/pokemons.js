const Pokemon = require('../models/pokemon');

module.exports = {
    index,
    show,
    new: newPokemon,
    create
}

function index(req, res) {
    Pokemon.find({}, function(err, pokemons) {
      res.render('pokemons/index', { title: 'All Pokemon', pokemons });
    });
}

function show(req, res) {
  Pokemon.findById(req.params.id, function(err, pokemon){
      res.render('pokemons/show');
  });
}

function newPokemon(req, res) {
  res.render('/pokemons/new', { title: 'Add Pokemon'});
}

function create(req, res) {
  const pokemon = new Pokemon(req.body);
  pokemon.save(function(err) {
    if (err) return res.redirect('/pokemons/new');
    res.redirect(`/pokemons/${pokemon._id}`);
  });
}