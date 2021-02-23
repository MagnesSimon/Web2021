const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("Bienvenue dans l'API de la boulangerie Lonbois.");
});

require("./routes/article.route.js")(app);

app.listen(3001, () => {
    console.log("Server is running on port 3001.");
});