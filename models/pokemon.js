const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema({
    name: String,
});

const pokemonSchema = new Schema({
    name: String,
    Type: String,
    region: [regionSchema]
})

module.exports = mongoose.model('Pokemon', pokemonSchema);