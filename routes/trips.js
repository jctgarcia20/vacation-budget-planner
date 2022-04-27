var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips');
const isLoggedIn = require('../config/auth');

// All routes starts with: /trips (because of the mounting in server.js)

// GET /trips
router.get('/', tripsCtrl.index);
// GET /trips/new (new functionality)
router.get('/:id/new', tripsCtrl.new);
// GET /trips/:id (show functionality)
router.get('/:id', tripsCtrl.show);
// POST /trips (create functionality)
router.post('/trips', isLoggedIn, tripsCtrl.create);

module.exports = router;
