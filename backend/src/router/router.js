const express = require('express');
const usersController = require('../controllers/usersController');
const loginMiddleware = require('../middlewares/loginMiddleware');
var auth = require('../middlewares/authentication');


const router = express.Router();

router.get('/users',auth.authenticateToken,usersController.getAll);
router.post('/login',usersController.validationUser);
router.delete('/deleteUser/:id',usersController.deleteUser);
router.put('/updateUser/:id',usersController.updateUser)

module.exports = router;
