const express = require('express');
const router = express.Router();
const registerContoller = require('../controllers/registerController');

router.post('/', registerContoller.handleNewUser);

module.exports = router;