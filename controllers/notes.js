const Pokemon = require('../models/pokemon');

module.exports = {
    addNote
};

function addNote(req, res) {
    Pokemon.findById(req.params.id, function(err, pokemon) {
      pokemon.comments.push(req.body);
      pokemon.save(function(err) {
        res.redirect(`/pokemons/${pokemon._id}`);
      })
    })
  }