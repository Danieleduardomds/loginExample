const usersModel = require('../models/usersModel');

const getAll = async (request, response) => {
    const users = await usersModel.getAll();
    return response.status(200).json(users);
};

const validationUser = async (request, response) => {
    const login = request.body.login;
    const [user] = await usersModel.validationUser(login); 
    if(user){
        return response.status(200).json({massage:'a543'});
    }else{
        return response.status(200).json({massage:'b324'});
    }  
};

module.exports = {
    getAll,
    validationUser
}
