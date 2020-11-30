var router = require('express').Router();
const request = require('request');
const researchersCtrl = require('../controllers/researchers');

router.get('/', researchersCtrl.index);

module.exports = router;