import express, { Express } from 'express';
const controller = require('../controller/user.controller.ts');

export default (app: Express) => {
    const router = express.Router();

    // Create a product.
    router.get("/createProduct/:id", controller.createUser);

    // Select all users.
    router.get("/all", controller.allUsers);

    // Select a single user with id.
    router.get("/select/:id", controller.oneUser);

    // // Select one user from the database if username and password are a match.
    // router.get("/login", controller.login);

    // // Create a new user.
    // router.post("/", controller.create);

    // // Updates an existing user
    // router.post("/update", controller.update)

    // // Deletes an existing user
    // router.delete("/delete/:id", controller.delete)



    // Post request must be tested using POSTMAN
    router.get("/test", (req, res) => {
        res.status(200).json({ message: "Test successful" });
    });


    // Add routes to server.
    app.use("/api/user", router);
};
