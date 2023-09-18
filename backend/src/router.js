const express = require('express');
const usersController = require('./controllers/usersController');
const { getAll } = require('./models/usersModel');

const router = express.Router();

router.get('/users',usersController.getAll);

module.exports = router;
