const Researcher = require('../models/researcher');

module.exports = {
  show
};

function show(req, res) {
  Researcher.find({}, function(err, researchers) {
    res.render('researchers/profile', { title: 'Researcher Profile', researchers });
  });
}