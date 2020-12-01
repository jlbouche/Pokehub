const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamSchema = new mongoose.Schema({
    pokemon1: String,
    pokemon2: String,
    pokemon3: String,
    pokemon4: String,
    pokemon5: String,
    pokemon6: String
});

var researcherSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    teams: [teamSchema]
});

module.exports = mongoose.model('Researcher', researcherSchema);