const express = require('express');
const router = express.Router();

const movie_control = require('../controllers/movie.controller');

router.get('/:q', movie_control.search);

module.exports = router;