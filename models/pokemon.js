const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pokemonSchema = new Schema({
    name: String,
    Type: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);