const mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    
})

var trainerSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    team: [teamSchema]
});

module.exports = mongoose.model('Trainer', trainerSchema);