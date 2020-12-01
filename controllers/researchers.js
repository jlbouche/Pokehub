const Researcher = require('../models/researcher');
const Pokemon = require('../models/pokemon');

module.exports = {
    index,
}

function index(req, res) {
    Researcher.find({}, function(err, researchers) {
      res.render('researchers/index', { title: 'Your Researcher Profile', researchers });
    });
}