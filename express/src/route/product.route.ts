module.exports = (express, app) => {
    const controller = require("../controller/product.controller.ts");
    const router = express.Router();
    
    // Create a product.
    router.post("/createProduct", controller.createProduct);
  
    // Add routes to server.
    app.use("/api/reply", router);
  };
  