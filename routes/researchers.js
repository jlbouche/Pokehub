var express = require('express');
var router = express.Router();
const researchersCtrl = require('../controllers/researchers');

router.get('/profile', isLoggedIn, researchersCtrl.show);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next()
  } else {
      res.redirect('/auth/google');
  }
}

module.exports = router;