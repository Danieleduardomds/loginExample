const connection = require('./connection');

const getAll = async () => {
    //funcao assicrona que pega primeiro array podendo usar tb return users[0]
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const validationUser = async (login) => {
    const validationLogin = login; 
    const query = 'SELECT * FROM users WHERE login = ?';    
    const [user] = await connection.execute(query,[validationLogin]);
    return user;
};

module.exports = {
    getAll,
    validationUser,
};