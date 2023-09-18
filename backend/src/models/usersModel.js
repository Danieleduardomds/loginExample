const connection = require('./connection');

const getAll = async() => {
    //funcao assicrona 
    const users = await connection.execute('SELECT * FROM users');
    return users;
};

module.exports = {
    getAll
};