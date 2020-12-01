const Researcher = require('../models/researcher');
const Pokemon = require('../models/pokemon');
const researcher = require('../models/researcher');

module.exports = {
    addToTeam
}

function addToTeam(req, res) {
    Pokemon.findById(req.params.id, function(err, researcher) {
        researcher.teams.push(req.body.pokemonId);
        researcher.save(function(err) {
            res.redirect("/researchers/profile");
        })
    })
}