const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// invoke env config
dotenv.config();

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/users", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
