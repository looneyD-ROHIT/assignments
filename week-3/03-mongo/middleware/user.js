const { User } = require("../db");

async function userMiddleware(req, res, next) {
    const { username, password } = req.headers;
    if (!username || !password) {
        res.status(400).send("Please provide username and password");
        return;
    }
    const result = await User.findOne({ username, password });
    if (!result) {
        res.status(401).send("Unauthorized");
        return;
    }
    req.user = result;
    next();
}

module.exports = userMiddleware;