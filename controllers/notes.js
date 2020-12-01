const Pokemon = require('../models/pokemon');

module.exports = {
  create,
  edit,
  delete: deleteNote
};

function create(req, res){
  Pokemon.findById(req.params.id, function(err, pokemons){
      req.body.userId = req.user._id;
      pokemons.notes.push(req.body);
      pokemons.save(function(err){
          res.redirect(`/pokemons/${pokemons._id}`);
      });
  });
}

function edit(req, res) {
  Pokemon.findOne({'notes._id': req.params.id}, function(err, pokemons) {
    const noteDoc = pokemons.notes.id(req.params.id);
    if (!noteDoc.userId.equals(req.user._id)) return res.redirect(`/pokemons/${pokemons._id}`);
    noteDoc.text = req.body.text;
    pokemons.save(function(err) {
      res.redirect(`/pokemons/${pokemons._id}`);
    });
  });
}
 
function deleteNote(req, res) {
  Pokemon.findOne({'comment._id': req.params.id}, function(err, pokemons) {
    const noteDoc = pokemons.notes.id(req.params.id);
    if (!noteDoc.userId.equals(req.user._id)) return res.redirect(`/pokemons/${pokemons._id}`);
    noteDoc.remove();
    pokemons.save(function(err) {
      res.redirect(`/pokemons/${pokemons._id}`);
    });
  });
}