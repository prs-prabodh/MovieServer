const express = require('express');
const router = require('router');

const login_control = require('../controllers/login.controller');

router.get('/:usrname/:pass', login_control.login);

module.exports = router;