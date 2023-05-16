const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./model/model");
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Домашняя страница. Бэк работает" });
});
const PORT = process.env.PORT || 8080;

db.sequelize.sync();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const auth = require('./routes/auth.routes.js');

app.use("/auth", auth)