const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

const getAll = async (request, response) => {
    const users = await usersModel.getAll();
    return response.status(200).json(users);
};

const validationUser = async (request, response) => {
    const login = request.body.login;
    const password = request.body.password;
    const [user] = await usersModel.validationUser(login,password); 
    if(user){
        const userRes = { email: user.login, password: user.password }
        const accessToken = jwt.sign(userRes, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
        return response.status(200).json({ token: accessToken });
        //return response.status(200).json({code:'a543'});       
    }else{
        return response.status(200).json({code:'b324'});
    }  
};

const deleteUser = async (request, response) => {
    const {id} = request.params;
    await usersModel.deleteUser(id);
    return response.status(204).json();
};

const updateUser= async (request,response) =>{
    const {id} = request.params;
    await usersModel.updateUser(id,request.body)
    return response.status(204).json();
}

module.exports = {
    getAll,
    validationUser,
    deleteUser,
    updateUser
}
