const Pokemon = require('../models/pokemon');

module.exports = {
  index,
  show,
  new: newPokemon,
  create
};

function index(req, res) {
  Pokemon.find({}, function(err, pokemons) {
    res.render('pokemons/index', { title: 'All Pokemon', pokemons });
  });
}

function show(req, res) {
  Pokemon.findById(req.params.id, function(err, pokemon) {
        res.render('pokemons/show', {
          title: 'Pokemon Detail', pokemon
        });
      }
    );
  };


function newPokemon(req, res) {
  res.render('pokemons/new', { title: 'Add Pokemon' });
}

function create(req, res) {
  const pokemon = new Pokemon(req.body);
  pokemon.save(function(err) {
    res.redirect(`/pokemons/${pokemon._id}`);
  });
}
