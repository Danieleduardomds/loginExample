const express = require('express');
const usersController = require('./controllers/usersController');
const { getAll } = require('./models/usersModel');

const router = express.Router();

router.get('/tasks',usersController.getAll);

module.exports = router;
