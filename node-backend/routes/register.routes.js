const express = require('express');
const router = express.Router();

const register_control = require('../controllers/register.controller');

router.get('/:name_user/:usrname/:pass', register_control.register);

module.exports = router;