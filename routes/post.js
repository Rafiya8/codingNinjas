const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postaction');

router.get('/post',post_controller.post);

module.exports = router;