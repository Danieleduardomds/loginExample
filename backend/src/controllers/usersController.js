const usersModel = require('../models/usersModel');

const getAll = async (request, response) => {
    const users = await usersModel.getAll();
    return response.status(200).json(users);
};

const validationUser = async (request, response) => {
    const login = request.body.login;
    const password = request.body.password;
    const [user] = await usersModel.validationUser(login,password); 
    if(user){
        return response.status(200).json({code:'a543'});
    }else{
        return response.status(200).json({code:'b324'});
    }  
};

const deleteUser = async (request, response) => {
    const idUser = request.body.id;
    await usersModel.deleteUser(idUser);
    return response.status(200).json();
};


module.exports = {
    getAll,
    validationUser,
    deleteUser
}
