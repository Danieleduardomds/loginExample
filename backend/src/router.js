const express = require('express');
const usersController = require('./controllers/usersController');
const loginMiddleware = require('./middlewares/loginMiddleware');


const router = express.Router();

router.get('/users',usersController.getAll);
router.post('/login',loginMiddleware.validateDataLogin, usersController.validationUser);
router.delete('/deleteUser',loginMiddleware.validateIdUser, usersController.deleteUser);

module.exports = router;
