const validateDataLogin = (request, response, next) => {
    const { body } = request;
    if (body.login === undefined) {
        return response.status(400).json({ massage: 'the field "Login" is required' });
    }
    if (body.login === '') {
        return response.status(400).json({ massage: 'Login cannot be empty' });
    }
    next();
};

module.exports = {
    validateDataLogin,
}