const connection = require('../infra/connection');
const database = require('../infra/connectionSequelize');
const User = require('../models/usersModel');

const getAll = async () => {
    try {     
        const [allUser] = await connection.execute('SELECT * FROM users');      
        return allUser;
    } catch (error){
        throw error
    }
};


// const getAll = async () => {
//     //await database.sync();
//     try {
//        const user = await User.findAll();
//        return user;
//     } catch (error) {
//         throw error
//     }
// };

const validationUser = async (login, password) => {
    const validationLogin = login;
    const validationPassword = password;
    const query = 'SELECT * FROM users WHERE login = ? AND password = ?';
    const [user] = await connection.execute(query, [validationLogin, validationPassword]);
    return user;
};

const deleteUser = async (id) => {
    const validationIdUser = id;
    const query = 'DELETE FROM users WHERE id = ?';
    const user = await connection.execute(query, [validationIdUser]);
    return user;
};

const updateUser = async (id, user) => {
    const { login, password } = user;
    const query = 'UPDATE users SET login = ?, create_time =  NOW(), password = ? WHERE id = ?';
    const [updateUser] = await connection.execute(query, [login, password, id]);
    return updateUser;
};

module.exports = {
    getAll,
    validationUser,
    deleteUser,
    updateUser
};