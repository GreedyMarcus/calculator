const express = require('express');
const numberController = require('../../controllers/numberController');

// Init router
const router = express.Router();

// GET api/number
router.get('/', numberController.loadNumber);

// POST api/number
router.post('/', numberController.saveNumber);

module.exports = router;