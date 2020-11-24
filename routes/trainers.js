var router = require('express').Router();
const request = require('request');

router.get('/', function(req, res) {
    res.render('/trainers');
  });

module.exports = router;