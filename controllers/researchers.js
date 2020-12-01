const Researcher = require('../models/researcher');
const Pokemon = require('../models/pokemon');

module.exports = {
  show
};

function show(req, res) {
  Researcher.find({}, function(err, researchers) {
    res.render('researchers/profile', { title: 'Researcher Profile', researchers });
  });
}