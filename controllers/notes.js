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
    console.log(noteDoc);
    if (!noteDoc.userId.equals(req.user._id)) return res.redirect(`/pokemons/${pokemons._id}`);
    noteDoc.content = req.body.content;
    console.log("this is the updated note doc ", noteDoc);
    pokemons.save(function(err) {
      res.redirect(`/pokemons/${pokemons._id}`);
    });
  });
}
 
function deleteNote(req, res) {
  Pokemon.findOne({'notes._id': req.params.id}, function(err, pokemons) {
    const noteDoc = pokemons.notes.id(req.params.id);
    if (!noteDoc.userId.equals(req.user._id)) return res.redirect(`/pokemons/${pokemons._id}`);
    console.log(noteDoc);
    noteDoc.remove();
    pokemons.save(function(err) {
      res.redirect(`/pokemons/${pokemons._id}`);
    });
  });
}