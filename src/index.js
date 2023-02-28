const colors = require("colors");
const { Router } = require("express");
const express = require("express");
const { join, basename } = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routers/index.js"));
app.use(express.static(join(__dirname, "public")));
app.listen(PORT, () => console.log(`Server is listening at ${PORT}`.yellow));

const sendedRoute = join(__dirname, "public", "sended.html");
module.exports = { sendedRoute };
