const express = require('express');
const usersController = require('./controllers/usersController');
const loginMiddleware = require('./middlewares/loginMiddleware');


const router = express.Router();

router.get('/users',usersController.getAll);
router.get('/login',loginMiddleware.validateDataLogin, usersController.validationUser);

module.exports = router;
