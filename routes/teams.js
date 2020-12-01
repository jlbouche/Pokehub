var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

router.post('/researchers/profile', loggedIn, teamsCtrl.addToTeam);

function loggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/auth/google');
    }
}

module.exports = router;