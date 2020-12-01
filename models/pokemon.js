const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: String,
  userId: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
});



const pokemonSchema = new Schema({
  image: {
    data: Buffer,
    type: String
  },
  pokename: String,
  pokenickname: String,
  pokeid: {
      type: Number,
      min: 001,
      max: 898
  },
  poketype1: String,
  poketype2: String,
  pokedescript: String,
  notes: [noteSchema]
});

module.exports = mongoose.model('Pokemon', pokemonSchema);