const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/action');

router.get('/',home_controller.home);
router.use('/user',require('./user'));
router.use('/post',require('./post'));
module. exports = router;