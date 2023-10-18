require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401);
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
            if (err) {
                //res.locals = response;                
                return res.sendStatus(403);
            }else {
                next();
            }
        })
    }

}

module.exports = { authenticateToken }