const connection = require('./connection');

const getAll = async() => {
    //funcao assicrona que pega primeiro array podendo usar tb return users[0]
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

module.exports = {
    getAll
};