// src/index.js
import express, { Express, Request, Response } from "express";
import userRoutes from './route/user.route.ts';
import { prisma_seed } from "./database/index.ts";

require('dotenv').config();
const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 3000;

// Seed database
prisma_seed()

// Add CORS suport.
app.use(cors());

// Parse requests of content-type - application/json.
app.use(express.json());

// Using routes
userRoutes(app)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
