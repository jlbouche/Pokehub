const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var researcherSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
});

module.exports = mongoose.model('Researcher', researcherSchema);