const { Admin } = require("../db");
const jwt = require('jsonwebtoken');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // using jwt
    let token = req.headers.authorization;
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    token = token.split(" ")[1];
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const result = await Admin.findOne({ _id: payload._id });
        if (!result) {
            res.status(401).send("Unauthorized");
            return;
        }
        req.admin = result;
        next();
    } catch (error) {
        res.status(401).send("Unauthorized");
        console.log(error)
    }
}

module.exports = adminMiddleware;