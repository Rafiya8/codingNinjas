const express = require('express');
const router = express.Router();

const user_controllers = require('../controllers/user_actions');
router.get('/profile',user_controllers.profile);

module.exports = router;