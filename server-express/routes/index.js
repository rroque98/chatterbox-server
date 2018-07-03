var express = require('express');
var ctrl = require('../controllers');
var router = express.Router();



// respond with "hello world" when a GET request is made to the homepage
router.get('/', ctrl.home );

router.get('/classes/messages', ctrl.messages.index );
router.post('/classes/messages', ctrl.messages.create );

module.exports = router;