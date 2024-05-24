var jwt = require('jsonwebtoken');
const JWT_SECRET="Farhad Dubey is a great man."

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');//While sending the req we will send by the same name auth-token ie. used as an Argument
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}
//fetchuser is a function


module.exports = fetchuser;