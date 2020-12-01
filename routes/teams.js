var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

router.post('/researchers/profile', teamsCtrl.addToTeam);

module.exports = router;