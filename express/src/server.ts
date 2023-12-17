// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from './route/user.route.ts';
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Add CORS suport.
app.use(cors());

// Parse requests of content-type - application/json.
app.use(express.json());

// Using routes
productRoutes(app)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
