const  usersModel = require('../models/usersModel');

const getAll = async (request, response) => {
    const users =  await usersModel.getAll();
    return response.status(200).json(users);
};

module.exports = {
    getAll
}
