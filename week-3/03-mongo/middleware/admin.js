const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
    if (!username || !password) {
        res.status(400).send("Please provide username and password");
        return;
    }
    const result = await Admin.findOne({ username, password });
    if (!result) {
        res.status(401).send("Unauthorized");
        return;
    }
    // console.log(result)
    req.admin = result;
    next();
}

module.exports = adminMiddleware;