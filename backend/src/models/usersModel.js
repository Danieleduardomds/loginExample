const connection = require('./connection');

const getAll = async () => {
    //funcao assicrona que pega primeiro array podendo usar tb return users[0]
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

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

module.exports = {
    getAll,
    validationUser,
    deleteUser
};