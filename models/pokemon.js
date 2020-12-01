const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  content: String,
}, {
  timestamps: true
});

const pokemonSchema = new Schema({
    pokename: String,
    pokeid: {
        type: Number,
        min: 001,
        max: 898
    },
    poketype1: String,
    poketype2: String,
    pokedescript: String,
    notes: [notesSchema]
});

module.exports = mongoose.model('Pokemon', pokemonSchema);