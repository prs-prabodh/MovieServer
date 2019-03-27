const express = require('express');
const router = express.Router();

const login_control = require('../controllers/login.controller');

router.get('/:usrname/:pass', login_control.login);

module.exports = router;