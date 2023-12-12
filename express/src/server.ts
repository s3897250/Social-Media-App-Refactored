// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from './route/product.route.ts';
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Add CORS suport.
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Using routes
productRoutes(app)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
