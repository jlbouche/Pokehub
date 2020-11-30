const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    text: String
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
    comments: [commentSchema]
});

module.exports = mongoose.model('Pokemon', pokemonSchema);