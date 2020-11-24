const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamSchema = new mongoose.Schema({

});

var researcherSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    team: [teamSchema]
});

module.exports = mongoose.model('Researcher', researcherSchema);