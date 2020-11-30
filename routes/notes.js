const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

router.post('/movies/:id/reviews', notesCtrl.create);

module.exports = router;