const express = require('express');
const router = require('router');

const movie_control = require('../controllers/movie.controller');

router.get('', movie_control.search);

module.exports = router;