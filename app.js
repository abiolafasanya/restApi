require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env || 3000;

app.set("port", PORT || 3000);
app.use(express.json());
app.use(errorHandler)

function errorHandler (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: err.message,
        status: 500,
        message: "Internal Server Error"
    });
}
// routes component
const route = (moduleName) => require(`./modules/${moduleName}/routes`);

// routes -> for the modules
app.use("/", route("user"));

app.listen(app.get("port"), listening)

function listening() {
    console.log(`Listening on port ${app.get("port")}`)
}

