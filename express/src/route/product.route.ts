import express, { Express } from 'express';
const controller = require('../controller/product.controller.ts');

export default (app: Express) => {
    const router = express.Router();
    
    // Create a product.
    router.post("/createProduct", controller.createProduct);
  
    // Add routes to server.
    app.use("/api/product", router);
};
