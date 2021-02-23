module.exports = app => {
    const articles = require("../controllers/article.controller.js");

    // Create a new Customer
    app.post("/articles", articles.create);

    // Retrieve all Customers
    app.get("/articles", articles.findAll);

    // Retrieve a single Customer with customerId
    app.get("/articles/:id", articles.findOne);

    // Update a Customer with customerId
    app.put("/articles/:id", articles.update);

    // Delete a Customer with customerId
    app.delete("/articles/:id", articles.delete);

};