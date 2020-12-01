const Pokemon = require('../models/pokemon');

module.exports = {
  create
};

function create(req, res) {
  Pokemon.findById(req.params.id, function(err, pokemon) {
    pokemon.notes.push(req.body);
    pokemon.save(function(err) {
      res.redirect(`/pokemons/${pokemon._id}`);
    });
  });
}