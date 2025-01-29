import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

config();
console.log('MONGODB_URL in index.ts:', process.env.MONGODB_URL);
const app = express();

//middlewares
app.use(express.json());

//only using it for development
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;