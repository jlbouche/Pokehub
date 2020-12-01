var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notes');

router.post('/pokemons/:id/notes', loggedIn, notesCtrl.create);
router.put('/pokemons/:id/notes/:id', loggedIn, notesCtrl.edit);
router.delete('/pokemons/:id/notes/:id', loggedIn, notesCtrl.delete);

function loggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/auth/google');
    }
}

module.exports = router;